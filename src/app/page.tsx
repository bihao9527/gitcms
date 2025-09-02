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
              玄易閣傳承道教文化精髓，專精八字命理、風水勘察、道家科儀等傳統學術。囊括一生財運、事業、健康壽命、婚姻感情、五行缺失、一生命盤、流年運勢等各個方面。基於生辰八字，我們為您提供量身定制的解決方案，助您早日實現目標，提升生活質量。
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-amber-50/80 to-orange-50/80 border border-amber-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🔮</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">八字命理</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">以天干地支為根基，分析事業婚姻財運健康，洞察人生軌跡</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-amber-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border border-blue-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🏠</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">風水諮詢</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">勘察地形建築方位，調整格局達成天人合一，優化能量場</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-blue-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-blue-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-purple-50/80 to-pink-50/80 border border-purple-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">⚡</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">道家科儀</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">設壇誦經步罡踏斗，祈福度亡化解災厄，積累功德</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-purple-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-purple-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-green-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">📅</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">黃道吉日</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">干支曆法推選良辰，婚嫁動土避凶趨吉，天時地利人和</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-green-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-green-400 opacity-50"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-red-50/80 to-rose-50/80 border border-red-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🪙</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">六爻問事</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">投擲銅錢生成卦象，分析用神旺衰，推斷成敗吉凶</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-red-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-red-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-indigo-50/80 to-blue-50/80 border border-indigo-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">📝</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">起名改名</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">五格數理五行屬性，調整用字補益命理，調和運勢</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-indigo-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-indigo-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-yellow-50/80 to-amber-50/80 border border-yellow-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🕯️</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">道家點燈</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">以光明驅散晦暗，燃燈供奉神明，祈福延壽化厄運</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-teal-50/80 to-cyan-50/80 border border-teal-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🔱</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center traditional-text-shadow">吉物開光</h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">誦經咒語注入靈性，賦予法器護佑辟邪招福功用</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-teal-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-teal-400 opacity-50"></div>
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