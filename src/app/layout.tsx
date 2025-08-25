import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: '玄易阁 - 专业风水命理知识平台',
    template: '%s | 玄易阁'
  },
  description: '玄易阁是专业的风水命理知识平台，传承中华传统文化，结合现代科学，为您的生活和工作提供智慧指导。',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}