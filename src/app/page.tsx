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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
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
              專業風水命理平臺
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
              <div className="mx-8 text-2xl golden-text font-bold">✧ 特色服務 ✧</div>
              <div className="flex-1 bamboo-divider max-w-48"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-amber-50/80 to-orange-50/80 border border-amber-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🔮</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">八字命理</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">以天干地支為根基，分析事業婚姻財運健康，洞察人生軌跡</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-amber-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-blue-50/80 to-cyan-50/80 border border-blue-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🏠</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">風水諮詢</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">勘察地形建築方位，調整格局達成天人合一，優化能量場</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-blue-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-blue-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-purple-50/80 to-pink-50/80 border border-purple-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">⚡</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">道家科儀</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">設壇誦經步罡踏斗，祈福度亡化解災厄，積累功德</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-purple-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-purple-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-green-50/80 to-emerald-50/80 border border-green-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">📅</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">黃道吉日</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">干支曆法推選良辰，婚嫁動土避凶趨吉，天時地利人和</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-green-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-green-400 opacity-50"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-red-50/80 to-rose-50/80 border border-red-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🪙</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">六爻問事</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">投擲銅錢生成卦象，分析用神旺衰，推斷成敗吉凶</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-red-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-red-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-indigo-50/80 to-blue-50/80 border border-indigo-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">📝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">起名改名</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">五格數理五行屬性，調整用字補益命理，調和運勢</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-indigo-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-indigo-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-yellow-50/80 to-amber-50/80 border border-yellow-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🕯️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">道家點燈</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">以光明驅散晦暗，燃燈供奉神明，祈福延壽化厄運</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-yellow-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-yellow-400 opacity-50"></div>
              </div>
              
              <div className="relative p-6 rounded-2xl traditional-shadow bg-gradient-to-br from-teal-50/80 to-cyan-50/80 border border-teal-200/50 backdrop-blur-sm group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3 text-center">🔱</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center traditional-text-shadow">吉物開光</h3>
                <p className="text-gray-700 text-center text-base leading-relaxed">誦經咒語注入靈性，賦予法器護佑辟邪招福功用</p>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-teal-400 opacity-50"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-teal-400 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 八字命理详细介绍 */}
        <section className="relative">
          {/* 标题装饰 */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 bamboo-divider max-w-64"></div>
            <div className="mx-8 text-2xl golden-text font-bold">✦ 八字命理深度解析 ✦</div>
            <div className="flex-1 bamboo-divider max-w-64"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 性格分析 */}
            <div className="relative group">
              <div className="traditional-shadow rounded-3xl p-8 bg-gradient-to-br from-amber-50/90 to-orange-50/90 border border-amber-200/60 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl">
                    😊
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-amber-800 traditional-text-shadow">性格分析</h3>
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  通过八字解析，你可以了解自己的性格特点和优势，这有助于你更好地认识自己，发挥自己的潜力不足之处，走出困境重获新的发展和行为，提高自己的素质和能力
                </p>
                {/* 装饰角标 */}
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-amber-400 opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-amber-400 opacity-60"></div>
              </div>
            </div>

            {/* 事业财运 */}
            <div className="relative group">
              <div className="traditional-shadow rounded-3xl p-8 bg-gradient-to-br from-green-50/90 to-emerald-50/90 border border-green-200/60 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-2xl">
                    💰
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-green-800 traditional-text-shadow">事业财运</h3>
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  通过分析八字，可以发现你的事业运势和财富机会点，从而选择出合适的行业职业建议，了解自己是打工还是做生意？爱好经营还是早期合伙人一起做？
                </p>
                {/* 装饰角标 */}
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-green-400 opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-green-400 opacity-60"></div>
              </div>
            </div>

            {/* 人生大运 */}
            <div className="relative group">
              <div className="traditional-shadow rounded-3xl p-8 bg-gradient-to-br from-blue-50/90 to-cyan-50/90 border border-blue-200/60 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white text-2xl">
                    🗺️
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-blue-800 traditional-text-shadow">人生大运</h3>
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  八字推算能为你预测未来的人生大运，提示你的命运轨迹，让你有充分的准备，迎接人生的机遇
                </p>
                {/* 装饰角标 */}
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-blue-400 opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-blue-400 opacity-60"></div>
              </div>
            </div>

            {/* 婚姻 */}
            <div className="relative group">
              <div className="traditional-shadow rounded-3xl p-8 bg-gradient-to-br from-pink-50/90 to-rose-50/90 border border-pink-200/60 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-2xl">
                    ❤️
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-pink-800 traditional-text-shadow">婚姻</h3>
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  根据八字命盘，全面分析婚姻情况，对婚姻吉凶，结婚时间等等与婚姻有关的事情出具解释
                </p>
                {/* 装饰角标 */}
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-pink-400 opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-pink-400 opacity-60"></div>
              </div>
            </div>

            {/* 六亲 */}
            <div className="relative group">
              <div className="traditional-shadow rounded-3xl p-8 bg-gradient-to-br from-purple-50/90 to-violet-50/90 border border-purple-200/60 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center text-white text-2xl">
                    👥
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-purple-800 traditional-text-shadow">六亲</h3>
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  预测与父母大夫，妻子可能孩子女关系，同时，八字推断可以让你了解你的性格特点未来发展潜能，让你更好地育及发展
                </p>
                {/* 装饰角标 */}
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-purple-400 opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-purple-400 opacity-60"></div>
              </div>
            </div>

            {/* 健康 */}
            <div className="relative group">
              <div className="traditional-shadow rounded-3xl p-8 bg-gradient-to-br from-red-50/90 to-orange-50/90 border border-red-200/60 backdrop-blur-sm hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center text-white text-2xl">
                    🏥
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-red-800 traditional-text-shadow">健康</h3>
                <p className="text-gray-700 leading-relaxed text-center mb-4">
                  为预防疾病，健康和孕妇等等层面，了解自己潜在的健康状况，可以让你有针对性地调整生活方式，提高生活质量
                </p>
                {/* 装饰角标 */}
                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-red-400 opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-red-400 opacity-60"></div>
              </div>
            </div>
          </div>

          {/* 底部总结 */}
          <div className="mt-16 text-center">
            <div className="relative mx-auto max-w-4xl p-8 rounded-2xl traditional-shadow bg-gradient-to-r from-amber-50/80 via-white/80 to-amber-50/80 backdrop-blur-sm border border-amber-200/50">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                <span className="text-amber-700 font-bold">八字命理</span>作为中华传统文化的瑰宝，能够为您提供全方位的人生指导。
                通过深入分析您的生辰八字，我们为您揭示性格特质、事业方向、财运机遇、婚姻情感、人际关系和健康状况，
                助您在人生的各个阶段都能<span className="text-amber-700 font-bold">趋吉避凶，把握先机</span>。
              </p>
              {/* 装饰性角标 */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-3 border-t-3 border-amber-500 opacity-60"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-3 border-t-3 border-amber-500 opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-3 border-b-3 border-amber-500 opacity-60"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-3 border-b-3 border-amber-500 opacity-60"></div>
            </div>
          </div>
        </section>

        {/* 服务方式 */}
        <section className="relative">
          {/* 标题装饰 */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex-1 bamboo-divider max-w-64"></div>
            <div className="mx-8 text-2xl golden-text font-bold">✦ 服务方式 ✦</div>
            <div className="flex-1 bamboo-divider max-w-64"></div>
          </div>

          <div className="relative mx-auto max-w-[900px] p-8 rounded-xl traditional-shadow bg-white/50 backdrop-blur-sm">
            <p className="text-gray-700 md:text-xl leading-relaxed font-medium mb-8">
              为了满足不同地区客户的需求，我们特别推出了便捷的线上八字解读服务。无论您身处世界的任何角落，都可以通过微信，WhatsApp、LINE
              等线上平台，进行八字命理咨询，方便快捷。您只需选择适合的时间和平台，即可轻松与我们的一对一命理师进行交流。
            </p>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 traditional-text-shadow">
                歡迎預約一對一咨詢服務
              </h3>
              <p className="text-lg text-gray-700 mb-6">联系一对一咨询服务</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium text-gray-700">LINE:</span>
                  <span className="text-lg font-bold text-green-600">@703utvtx</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium text-gray-700">WhatsApp:</span>
                  <span className="text-lg font-bold text-green-600">+852 6186 4975</span>
                </div>
              </div>
            </div>

            {/* 二维码 */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <img
                  src="https://i.postimg.cc/3r9tGmZ2/line.png"
                  alt="LINE二维码"
                  className="w-48 h-48 mx-auto rounded-lg shadow-lg"
                />
                <p className="mt-2 text-sm text-gray-600">LINE 二维码</p>
              </div>
              <div className="text-center">
                <img
                  src="https://i.postimg.cc/nLCx8ncP/WhatsApp.png"
                  alt="WhatsApp二维码"
                  className="w-48 h-48 mx-auto rounded-lg shadow-lg"
                />
                <p className="mt-2 text-sm text-gray-600">WhatsApp 二维码</p>
              </div>
            </div>

            {/* 装饰性角标 */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-amber-500"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-amber-500"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-amber-500"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-amber-500"></div>
          </div>
        </section>

        <ArticleList articles={allPostsData} />

        {/* <ResourceList resources={resources} />  // 屏蔽精选资源模块 */}
      </div>
    </div>
  )
}