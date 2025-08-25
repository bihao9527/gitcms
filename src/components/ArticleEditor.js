'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ArticleEditor() {
  const [article, setArticle] = useState({ title: '', description: '', content: '', path: '', coverImage: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  const path = searchParams.get('path');

  useEffect(() => {
    if (path) {
      fetchArticle(decodeURIComponent(path));
    } else {
      setError('No article path provided');
      setIsLoading(false);
    }
  }, [path]);

  const fetchArticle = async (articlePath) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/articles?path=${encodeURIComponent(articlePath)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch article');
      }
      const data = await response.json();
      setArticle(data);
    } catch (error) {
      console.error('Error fetching article:', error);
      setError('Failed to fetch article. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ article }),
      });
      if (!response.ok) {
        throw new Error('Failed to save article');
      }
      alert('Article saved successfully');
    } catch (error) {
      console.error('Error saving article:', error);
      setError('Failed to save article. Please try again.');
    }
  };

  if (isLoading) return <div>Loading article...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <Input
        name="title"
        value={article.title}
        onChange={handleInputChange}
        placeholder="Article Title"
      />
      <Input
        name="description"
        value={article.description}
        onChange={handleInputChange}
        placeholder="Article Description"
      />
      <Input
        name="coverImage"
        value={article.coverImage || ''}
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
        placeholder="Article Content"
        rows={20}
      />
      <Button onClick={handleSave}>Save Article</Button>
    </div>
  );
}