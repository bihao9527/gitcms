// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '玄易阁 - 专业风水命理知识平台 | 传承中华传统文化',
  description: '玄易阁是专业的风水命理知识平台，提供风水理论、八字命理、家居布局、办公环境等专业知识。传承中华传统文化，结合现代科学，为您的生活和工作提供智慧指导。',
  keywords: '风水,命理,八字,玄学,中华文化,家居风水,办公风水,阴阳五行,天干地支,周易',
  openGraph: {
    title: '玄易阁 - 专业风水命理知识平台',
    description: '传承中华传统文化，结合现代科学，为您的生活和工作提供智慧指导',
    type: 'website',
  },
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="min-h-screen traditional-gradient">
      {/* 传统装饰背景 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-current opacity-20"></div>
        <div className="absolute top-32 right-20 w-24 h-24 rounded-full border border-current opacity-15"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full border border-current opacity-10"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full border-2 border-current opacity-25"></div>
      </div>
      
      <div className="container mx-auto py-16 space-y-20 relative">
        <section className="text-center space-y-8">
          {/* 传统装饰顶部边框 */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex-1 bamboo-divider max-w-32"></div>
            <div className="mx-6 text-2xl">✦</div>
            <div className="flex-1 bamboo-divider max-w-32"></div>
          </div>
          
          <h1 className="text-5xl font-bold tracking-wider sm:text-6xl md:text-7xl lg:text-8xl golden-text traditional-text-shadow">
            玄易阁
          </h1>
          
          {/* 副标题装饰 */}
          <div className="relative">
            <h2 className="text-2xl tracking-widest sm:text-3xl md:text-4xl lg:text-4xl text-gray-700 font-medium">
              專業風水命理知識平臺
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
          
          <div className="relative mx-auto max-w-[900px] p-8 rounded-xl traditional-shadow bg-white/50 backdrop-blur-sm">
            <p className="text-gray-700 md:text-xl leading-relaxed font-medium">
              玄易閣傳承中華傳統文化精髓，融合現代科學理念，為您提供專業的風水理論、八字命理、家居佈局、辦公環境等知識。讓古老的智慧在現代生活中煥發新的光彩，助您創造和諧美好的生活環境。
            </p>
            {/* 装饰性角标 */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-amber-500"></div>
          </div>
        
          {/* 特色服务介绍 */}
          <div className="relative">
            {/* 分割线装饰 */}
            <div className="flex items-center justify-center mb-12">
              <div className="flex-1 bamboo-divider max-w-48"></div>
              <div className="mx-8 text-lg golden-text">✧ 特色服務 ✧</div>
              <div className="flex-1 bamboo-divider max-w-48"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative p-8 rounded-2xl traditional-shadow bg-gradient-to-br from-amber-50/80 to-orange-50/80 border border-amber-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🏠</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">家居風水</h3>
                <p className="text-gray-700 text-center leading-relaxed">專業指導家居佈局，營造和諧舒適的居住環境，讓您的家宅藏風聚氣</p>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-50"></div>
              </div>
              
              <div className="relative p-8 rounded-2xl traditional-shadow bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border border-blue-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">💼</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">辦公環境</h3>
                <p className="text-gray-700 text-center leading-relaxed">優化辦公空間佈局，提升工作效率和事業運勢，助您事業蒸蒸日上</p>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-blue-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-blue-400 opacity-50"></div>
              </div>
              
              <div className="relative p-8 rounded-2xl traditional-shadow bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-green-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">🔮</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">八字命理</h3>
                <p className="text-gray-700 text-center leading-relaxed">深入解析個人命理，瞭解人生軌跡和發展方向，知命改運趨吉避凶</p>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-green-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-green-400 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        <ArticleList articles={allPostsData} />
        <ResourceList resources={resources} />
      </div>
    </div>
  )
}