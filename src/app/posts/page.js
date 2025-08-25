import ArticleList from '@/components/ArticleList'
import { getSortedPostsData } from '@/lib/posts';

export const metadata = {
  title: '精选文章 - 玄易阁风水命理知识库',
  description: '阅读玄易阁精选的风水命理文章，包括风水理论、八字命理、家居布局、办公环境等专业知识。',
};

export default function Articles() {
  const allPostsData = getSortedPostsData();


  return (
    <div className="container mx-auto py-12">
      <ArticleList articles={allPostsData} showMoreLink={false} />
    </div>
  )
}

