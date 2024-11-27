'use client'
import { SectionWrapper } from '@/components/Layout'
import ListComponent from '../ListComponent'
import BlogCard from '../Blog/BlogCard'
import { BlogFrontmatter } from '@/types/frontmatter.type'
import { Button } from '../ui/button'
import Link from 'next/link'

const RecentBlog = ({ data }: { data: BlogFrontmatter[] }) => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="self-start md:self-center md:text-center space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex md:justify-center items-center">
          Postingan Terakhir
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          Berita terkini tentang inovasi, proyek, dan perkembangan terbaru dalam industri teknologi untuk memberikan wawasan mendalam tentang peristiwa terkini yang dapat memengaruhi dan memperkaya pengalaman Anda.
        </p>
      </div>
      <div className='w-full flex justify-end'>
        <Link href='/blog'>
          <Button>Lihat semua</Button>
        </Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-fade="5">
        <ListComponent data={data} renderItem={(post: BlogFrontmatter) => <BlogCard key={post.slug} post={post} />} />
      </ul>
    </SectionWrapper>
  )
}

export default RecentBlog
