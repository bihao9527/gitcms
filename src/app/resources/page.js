import fs from 'fs';
import path from 'path';
import ResourceList from '@/components/ResourceList'


export const metadata = {
  title: '精选资源 - 玄易阁风水命理资源库',
  description: '探索玄易阁精选的风水命理资源，包括经典著作、现代研究、专家讲座等专业资料。',
}


export default function Resources() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json');
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'));

  return (
    <div className="container mx-auto py-12">
      <ResourceList resources={resources} showMoreLink={false} />
    </div>
  )
}