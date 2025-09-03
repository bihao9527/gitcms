// components/Footer.js
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 border-t border-amber-200/50">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-1/4 w-20 h-20 rounded-full border border-current"></div>
        <div className="absolute bottom-8 right-1/4 w-16 h-16 rounded-full border border-current"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 顶部装饰线 */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 bamboo-divider max-w-32"></div>
          <div className="mx-8 text-xl golden-text">✦</div>
          <div className="flex-1 bamboo-divider max-w-32"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="relative">
            <h3 className="text-lg font-bold golden-text traditional-text-shadow mb-4 tracking-wider">关于我们</h3>
            <div className="w-12 h-0.5 bg-amber-500 mb-6"></div>
            <p className="text-gray-700 leading-relaxed font-medium">
              坤舆道是专业的风水命理知识平台，传承中华传统文化精髓，融合现代科学理念，为您提供专业的风水理论、八字命理、家居布局、办公环境等知识。
            </p>
            <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-amber-400 opacity-30"></div>
          </div>
          <div className="relative">
            <h3 className="text-lg font-bold golden-text traditional-text-shadow mb-4 tracking-wider">快速链接</h3>
            <div className="w-12 h-0.5 bg-amber-500 mb-6"></div>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="group flex items-center text-gray-700 hover:text-amber-700 transition-colors duration-300">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:bg-amber-600 transition-colors duration-300"></span>
                  首页
                </Link>
              </li>
              {/* <li>
                <Link href="/resources" className="group flex items-center text-gray-700 hover:text-amber-700 transition-colors duration-300">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:bg-amber-600 transition-colors duration-300"></span>
                  资源
                </Link>
              </li> */}
              <li>
                <Link href="/posts" className="group flex items-center text-gray-700 hover:text-amber-700 transition-colors duration-300">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:bg-amber-600 transition-colors duration-300"></span>
                  文章
                </Link>
              </li>
            </ul>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-amber-400 opacity-30"></div>
          </div>
          <div className="relative">
            <h3 className="text-lg font-bold golden-text traditional-text-shadow mb-4 tracking-wider">联系我们</h3>
            <div className="w-12 h-0.5 bg-amber-500 mb-6"></div>
            <ul className="space-y-4">
              <li>
                <a href="/" className="group flex items-center text-gray-700 hover:text-amber-700 transition-colors duration-300">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:bg-amber-600 transition-colors duration-300"></span>
                  坤舆道官网
                </a>
              </li>
              {/* 暂时隐藏GitHub链接 */}
              {/* <li>
                <a href="https://github.com/qiayue/gitbase" target="_blank" className="group flex items-center text-gray-700 hover:text-amber-700 transition-colors duration-300">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:bg-amber-600 transition-colors duration-300"></span>
                  GitHub
                </a>
              </li> */}
              <li>
                <a href="https://twitter.com/gefei55" target="_blank" className="group flex items-center text-gray-700 hover:text-amber-700 transition-colors duration-300">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 group-hover:bg-amber-600 transition-colors duration-300"></span>
                  Twitter
                </a>
              </li>
            </ul>
            <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-amber-400 opacity-30"></div>
          </div>
        </div>
        
        {/* 底部装饰分割线 */}
        <div className="flex items-center justify-center mt-16 mb-8">
          <div className="flex-1 bamboo-divider max-w-48"></div>
          <div className="mx-8 text-lg golden-text">✧ 传承文化 ✧</div>
          <div className="flex-1 bamboo-divider max-w-48"></div>
        </div>
        
        <div className="relative p-6 rounded-xl bg-gradient-to-r from-amber-50/30 to-amber-100/30 border border-amber-200/30 traditional-shadow">
          <p className="text-center text-gray-600 font-medium">
            &copy; {new Date().getFullYear()} 坤舆道 · 传承中华文化 · 保留所有权利
          </p>
          <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-amber-400 opacity-40"></div>
          <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-amber-400 opacity-40"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-amber-400 opacity-40"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-amber-400 opacity-40"></div>
        </div>
      </div>
    </footer>
  );
}