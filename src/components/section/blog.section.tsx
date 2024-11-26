'use client'
import { SectionWrapper } from '@/components/Layout'
import ListComponent from '../ListComponent'
import BlogCard from '../Blog/BlogCard'
import { BlogFrontmatter } from '@/types/frontmatter.type'
import ButtonLink from '../links/ButtonLink'

const RecentBlog = ({ data }: { data: BlogFrontmatter[] }) => {
  return (
    <SectionWrapper className="flex flex-col items-center justify-center">
      <div className="self-start md:self-center md:text-center space-y-3 md:space-y-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight flex md:justify-center items-center">
          Recent Blog Posts
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
        Do you want to increase your knowledge? read this blogs.
        </p>
      </div>
      <div className='w-full flex justify-end'>
        <ButtonLink href="/blog" className="dark:bg-transparent dark:text-white">View All Blogs</ButtonLink>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" data-fade="5">
        <ListComponent data={data} renderItem={(post: BlogFrontmatter) => <BlogCard key={post.slug} post={post} />} />
      </ul>
    </SectionWrapper>
  )
}

export default RecentBlog
