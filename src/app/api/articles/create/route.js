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

export async function POST(request) {
  const { title, description, content, slug, coverImage } = await request.json();

  // Validate slug
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return NextResponse.json({ error: '无效的文章标识格式' }, { status: 400 });
  }

  const path = `data/md/${slug}.md`;

  try {
    // Check if file already exists
    try {
      await octokit.repos.getContent({
        owner,
        repo,
        path,
      });
      return NextResponse.json({ error: '该文章标识已存在' }, { status: 400 });
    } catch (error) {
      if (error.status !== 404) {
        throw error;
      }
    }

    // Create new file
    const frontMatter = {
      title,
      description,
      date: new Date().toISOString(),
    };
    
    // Add coverImage if provided
    if (coverImage && coverImage.trim() !== '') {
      frontMatter.coverImage = coverImage;
    }
    
    const fileContent = matter.stringify(content, frontMatter);

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Create new article: ${title}`,
      content: Buffer.from(fileContent).toString('base64'),
    });

    // Sync articles
    await syncArticles();

    return NextResponse.json({ message: 'Article created successfully' });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: '创建文章失败' }, { status: 500 });
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