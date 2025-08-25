// components/ArticleList.js
'use client';

import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function ArticleList({ articles, showMoreLink = true }) {
  return (
    <section className="relative">
      {/* 装饰性边框 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      <div className="flex justify-between items-center mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-2">精选文章</h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto md:mx-0"></div>
          <p className="text-gray-600 mt-2 text-sm">传承千年智慧，品味人生哲理</p>
        </div>
        {showMoreLink && (
          <Link 
            href="/posts" 
            className="group flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-all duration-300 hover:gap-3"
          >
            <span className="font-medium">更多文章</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(({ id, title, description, date, coverImage }) => (
          <article 
            key={id} 
            className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* 装饰性角标 */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-amber-500"></div>
            
            {/* 文章封面图片 - 可点击跳转 */}
            <Link href={`/posts/${id}`} className="block relative h-48 overflow-hidden">
              <img 
                src={coverImage || "https://raw.githubusercontent.com/bihao9527/picure/main/6.jpg"}
                alt={`${title}封面图`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // 如果封面图片加载失败，使用默认图片
                  if (e.target.src !== "https://raw.githubusercontent.com/bihao9527/picure/main/6.jpg") {
                    e.target.src = "https://raw.githubusercontent.com/bihao9527/picure/main/6.jpg";
                  }
                }}
              />
              {/* 封面遮罩效果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <div className="p-6">
              {/* 文章标题 */}
              <Link 
                href={`/posts/${id}`}
                className="block mb-3 group-hover:text-amber-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 leading-tight line-clamp-2 group-hover:text-amber-700">
                  {title}
                </h3>
              </Link>
              
              {/* 文章描述 - 可点击跳转 */}
              <Link 
                href={`/posts/${id}`}
                className="block mb-4 group-hover:text-gray-700 transition-colors duration-300"
              >
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700">
                  {description}
                </p>
              </Link>
              
              {/* 底部信息栏 */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(date).toLocaleDateString('zh-CN', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                
                <Link 
                  href={`/posts/${id}`}
                  className="flex items-center gap-1 text-amber-600 hover:text-amber-800 text-sm font-medium group-hover:gap-2 transition-all duration-300"
                >
                  <span>阅读全文</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
            
            {/* 悬停时的装饰效果 */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-100/0 group-hover:from-amber-50/30 group-hover:to-amber-100/20 transition-all duration-500 pointer-events-none"></div>
          </article>
        ))}
      </div>
      
      {/* 底部装饰 */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400">
          <div className="w-8 h-px bg-gray-300"></div>
          <span className="text-xs">✧ 传承文化 ✧</span>
          <div className="w-8 h-px bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}