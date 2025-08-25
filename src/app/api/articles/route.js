import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';
import matter from 'gray-matter';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const articlesJsonPath = 'data/json/articles.json';
const mdFolderPath = 'data/md';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sync = searchParams.get('sync');
  const path = searchParams.get('path');

  try {
    if (path) {
      // Fetch single article
      try {
        const { data } = await octokit.repos.getContent({
          owner,
          repo,
          path: decodeURIComponent(path),
        });

        const content = Buffer.from(data.content, 'base64').toString('utf8');
        const { data: frontMatter, content: articleContent } = matter(content);

        return NextResponse.json({
          ...frontMatter,
          content: articleContent,
          path: data.path,
        });
      } catch (error) {
        console.error('Error fetching article:', error);
        return NextResponse.json({ error: '获取文章失败' }, { status: 500 });
      }
    } else if (sync === 'true') {
      await syncArticles();
    }

    const { data } = await octokit.repos.getContent({
      owner,
      repo,
      path: articlesJsonPath,
    });

    const content = Buffer.from(data.content, 'base64').toString('utf8');
    const articles = JSON.parse(content);

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: '获取文章列表失败' }, { status: 500 });
  }
}

export async function POST(request) {
  const { article } = await request.json();

  try {
    // Update the MD file
    await updateMdFile(article);

    // Sync articles
    await syncArticles();

    return NextResponse.json({ message: 'Article updated successfully' });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json({ error: '更新文章失败' }, { status: 500 });
  }
}

async function syncArticles() {
  try {
    // Fetch all MD files
    const { data: files } = await octokit.repos.getContent({
      owner,
      repo,
      path: mdFolderPath,
    });

    const mdFiles = files.filter(file => file.name.endsWith('.md'));

    const articles = await Promise.all(mdFiles.map(async file => {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path: file.path,
      });

      const content = Buffer.from(data.content, 'base64').toString('utf8');
      const { data: frontMatter, content: articleContent } = matter(content);

      // Fetch the last commit for this file
      const { data: commits } = await octokit.repos.listCommits({
        owner,
        repo,
        path: file.path,
        per_page: 1
      });

      const lastModified = commits[0]?.commit.committer.date || data.sha;

      const articleData = {
        title: frontMatter.title,
        description: frontMatter.description,
        date: frontMatter.date,
        lastModified: lastModified,
        path: file.path,
      };
      
      // Add coverImage if it exists
      if (frontMatter.coverImage) {
        articleData.coverImage = frontMatter.coverImage;
      }
      
      return articleData;
    }));

    // Update articles.json
    const { data: currentFile } = await octokit.repos.getContent({
      owner,
      repo,
      path: articlesJsonPath,
    });

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: articlesJsonPath,
      message: 'Sync articles',
      content: Buffer.from(JSON.stringify(articles, null, 2)).toString('base64'),
      sha: currentFile.sha,
    });

  } catch (error) {
    console.error('Error syncing articles:', error);
    throw error;
  }
}

async function updateMdFile(article) {
  try {
    const { data: currentFile } = await octokit.repos.getContent({
      owner,
      repo,
      path: article.path,
    });

    const currentContent = Buffer.from(currentFile.content, 'base64').toString('utf8');
    const { data: frontMatter, content: articleContent } = matter(currentContent);

    const updatedFrontMatter = {
      ...frontMatter,
      title: article.title,
      description: article.description,
      lastModified: new Date().toISOString(),
    };
    
    // Update coverImage if provided
    if (article.coverImage !== undefined) {
      if (article.coverImage && article.coverImage.trim() !== '') {
        updatedFrontMatter.coverImage = article.coverImage;
      } else {
        // Remove coverImage if empty
        delete updatedFrontMatter.coverImage;
      }
    }

    const updatedContent = matter.stringify(article.content, updatedFrontMatter);

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path: article.path,
      message: `Update article: ${article.title}`,
      content: Buffer.from(updatedContent).toString('base64'),
      sha: currentFile.sha,
    });

  } catch (error) {
    console.error('Error updating MD file:', error);
    throw error;
  }
}