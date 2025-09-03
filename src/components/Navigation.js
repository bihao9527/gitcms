'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
// import { Github } from 'lucide-react' // 暂时不需要GitHub图标
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { path: '/', label: '首页' },
  // { path: '/resources', label: '资源' }, // 屏蔽资源菜单
  { path: '/posts', label: '文章' },
]

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true;
    const checkLoginStatus = async () => {
      if (!isMounted) return;
      setIsLoading(true);
      try {
        const response = await fetch('/api/check-auth');
        const data = await response.json();
        if (isMounted) setIsLoggedIn(data.isLoggedIn);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    checkLoginStatus();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-200/50 bg-gradient-to-r from-white/95 to-amber-50/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex gap-8 md:gap-12 items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <span className="text-2xl font-bold golden-text traditional-text-shadow tracking-wider">坤舆道</span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative flex items-center px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg",
                  item.path === pathname 
                    ? "text-amber-700 bg-amber-100/50 traditional-shadow" 
                    : "text-gray-700 hover:text-amber-700 hover:bg-amber-50/30"
                )}
              >
                {item.label}
                {item.path === pathname && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-amber-500"></div>
                )}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* 暂时隐藏GitHub链接 */}
          {/* <Link
            href="https://github.com/qiayue/gitbase"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link> */}
          {!isLoading && (
            isLoggedIn ? (
              <>
                <Link href="/admin">
                  <Button 
                    variant="ghost" 
                    className="text-gray-700 hover:text-amber-700 hover:bg-amber-50/50 border border-amber-200/50 traditional-shadow"
                  >
                    管理后台
                  </Button>
                </Link>
                <Button 
                  onClick={handleLogout} 
                  variant="outline"
                  className="text-gray-700 hover:text-amber-700 border-amber-200 hover:bg-amber-50/50 traditional-shadow"
                >
                  退出登录
                </Button>
              </>
            ) : (
              <Link href="/login">
                <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 traditional-shadow">
                  登录
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  )
}