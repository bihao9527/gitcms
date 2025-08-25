'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";

export default function CreateArticlePage() {
  const [article, setArticle] = useState({ title: '', description: '', content: '', slug: '', coverImage: '' });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSave = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/articles/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(article),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || '创建文章失败');
      }

      router.push('/admin/articles');
    } catch (error) {
      console.error('Error creating article:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">创建新文章</h1>
      {error && <Alert variant="destructive" className="mb-4">{error}</Alert>}
      <div className="space-y-4">
        <Input
          name="title"
          value={article.title}
          onChange={handleInputChange}
          placeholder="文章标题"
        />
        <Input
          name="description"
          value={article.description}
          onChange={handleInputChange}
          placeholder="文章描述"
        />
        <Input
          name="slug"
          value={article.slug}
          onChange={handleInputChange}
          placeholder="文章标识 (例如: feng-shui-guide)"
        />
        <Input
          name="coverImage"
          value={article.coverImage}
          onChange={handleInputChange}
          placeholder="封面图片URL (例如: https://raw.githubusercontent.com/username/repo/main/image.jpg)"
        />
        {/* 封面图片预览 */}
        {article.coverImage && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">封面预览:</label>
            <div className="relative h-48 w-full rounded-lg overflow-hidden border border-gray-200">
              <img 
                src={article.coverImage}
                alt="封面预览"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm" style={{display: 'none'}}>
                图片加载失败，请检查URL是否正确
              </div>
            </div>
          </div>
        )}
        <Textarea
          name="content"
          value={article.content}
          onChange={handleInputChange}
          placeholder="文章内容 (支持Markdown格式)"
          rows={20}
        />
        <Button onClick={handleSave} disabled={isLoading}>
          {isLoading ? '创建中...' : '创建文章'}
        </Button>
      </div>
    </div>
  );
}