import Script from 'next/script'

interface StructuredDataProps {
  type: 'website' | 'article' | 'service' | 'organization'
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "坤舆道风水命理",
          "alternateName": "坤舆道",
          "url": "https://xuanyige.com",
          "description": "专业风水命理平台，提供八字算命、家居风水、办公风水、起名改名、择吉日等服务",
          "inLanguage": "zh-CN",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://xuanyige.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
      
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "坤舆道",
          "url": "https://xuanyige.com",
          "logo": "https://xuanyige.com/logo.png",
          "description": "专业风水命理平台，传承中华传统文化",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+852-6186-4975",
            "contactType": "customer service",
            "availableLanguage": ["Chinese", "English"]
          },
          "sameAs": [
            "https://line.me/ti/p/@703utvtx"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "CN"
          }
        }
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "风水命理咨询服务",
          "description": "专业八字算命、家居风水、办公风水、起名改名、择吉日等服务",
          "provider": {
            "@type": "Organization",
            "name": "坤舆道"
          },
          "serviceType": "风水命理咨询",
          "areaServed": "全球",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://xuanyige.com",
            "serviceSmsNumber": "+852-6186-4975"
          }
        }
      
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "玄易阁"
          },
          "publisher": {
            "@type": "Organization",
            "name": "玄易阁",
            "logo": {
              "@type": "ImageObject",
              "url": "https://xuanyige.com/logo.png"
            }
          },
          "datePublished": data.date,
          "dateModified": data.lastModified || data.date,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://xuanyige.com/posts/${data.id}`
          }
        }
      
      default:
        return {}
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}
