// components/ResourceList.js
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

export default function ResourceList({ resources, showMoreLink = true }) {
  return (
    <section className="relative">
      {/* 装饰性顶部边框 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      <div className="flex justify-between items-center mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 mb-2 traditional-text-shadow">精选资源</h2>
          <div className="w-16 h-0.5 bg-amber-600 mx-auto md:mx-0"></div>
          <p className="text-gray-600 mt-2 text-sm">汇聚优质学习资源，助您深入了解国学精髓</p>
        </div>
        {showMoreLink && (
          <Link 
            href="/resources" 
            className="group flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-all duration-300 hover:gap-3"
          >
            <span className="font-medium">更多资源</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-xl border border-amber-200/50 bg-gradient-to-br from-white to-amber-50/30 traditional-shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* 装饰性角标 */}
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-amber-400"></div>
            
            <div className="p-6">
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link block"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 group-hover/link:text-amber-700 transition-colors duration-300 traditional-text-shadow">
                    {resource.name}
                  </h3>
                  <ExternalLink 
                    size={16} 
                    className="text-amber-600 group-hover/link:text-amber-800 transition-colors duration-300 mt-0.5 flex-shrink-0"
                  />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed group-hover/link:text-gray-700 transition-colors duration-300">
                  {resource.description}
                </p>
              </a>
            </div>
            
            {/* 悬停时的装饰效果 */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-100/0 group-hover:from-amber-50/20 group-hover:to-amber-100/10 transition-all duration-500 pointer-events-none"></div>
            
            {/* 底部装饰线 */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* 底部装饰 */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-2 text-gray-400">
          <div className="w-8 h-px bg-gray-300"></div>
          <span className="text-xs">✧ 知识宝库 ✧</span>
          <div className="w-8 h-px bg-gray-300"></div>
        </div>
      </div>
    </section>
  )
}