import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: {
    default: '风水命理_八字命理_坤舆道专业风水大师在线咨询',
    template: '%s | 坤舆道风水命理'
  },
  description: '坤舆道专业风水命理平台，提供八字算命、家居风水、办公风水、起名改名、择吉日等服务。资深风水大师在线咨询，传承中华传统文化，助您趋吉避凶，提升运势。',
  keywords: '风水命理,八字命理,风水大师,算命,生辰八字,家居风水,办公风水,起名改名,择吉日,五行,天干地支,周易,玄学,运势测算,风水布局,风水调理',
  authors: [{ name: '坤舆道风水命理' }],
  creator: '坤舆道',
  publisher: '坤舆道',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://xuanyige.com',
    siteName: '坤舆道风水命理',
    title: '风水命理_八字命理_坤舆道专业风水大师在线咨询',
    description: '专业风水命理平台，提供八字算命、家居风水、办公风水等服务。资深风水大师在线咨询，传承中华传统文化。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '坤舆道风水命理',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '风水命理_八字命理_坤舆道专业风水大师在线咨询',
    description: '专业风水命理平台，提供八字算命、家居风水、办公风水等服务。',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://xuanyige.com',
  },
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