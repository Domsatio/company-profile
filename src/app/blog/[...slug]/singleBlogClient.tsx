'use client'
import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { BlogFrontmatter, BlogType } from '@/types/frontmatters'
import MDXComponents from '@/components/content/MDXcomponents'
import TableOfContents, { HeadingScrollSpy } from '@/components/content/TableOfContents'
import useScrollSpy from '@/hooks/useScrollspr'
import Comment from '@/components/content/Comment'
import NextImage from '@/components/NextImage'
// import UnstyledLink from '@/components/links/UnstyledLink'
import Accent from '@/components/Accent'
// import Tooltip from '@/components/Tooltip'
// import CustomLink from '@/components/links/CustomLink'
import { format } from 'date-fns'
import { HiOutlineClock } from 'react-icons/hi'
import BlogCard from '@/components/Blog/BlogCard'
import ListComponent from '@/components/ListComponent'

// import { cleanBlogPrefix } from '@/lib/helper.client';

type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[]
} & BlogType

export default function SingleBlogClient({ code, frontmatter, recommendations }: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  const activeSection = useScrollSpy()

  const [toc, setToc] = React.useState<HeadingScrollSpy>()
  const minLevel = toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0

  React.useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3')

    const headingArr: HeadingScrollSpy = []
    headings.forEach((heading) => {
      const id = heading.id
      const level = +heading.tagName.replace('H', '')
      const text = heading.textContent + ''

      headingArr.push({ id, level, text })
    })

    setToc(headingArr)
  }, [frontmatter.slug])

  return (
    <div>
      <main className="relative max-w-7xl mx-auto mb-10">
        <div className="pb-4 dark:border-gray-600">
          <NextImage
            src={frontmatter.banner}
            alt={`Photo from unsplash: ${frontmatter.banner}`}
            className="w-full h-[500px]"
            imgClassName="w-full h-full object-cover rounded-lg"
            width={1200}
            height={300}
          />

          <h1 className="mt-4">{frontmatter.title}</h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Written on {format(new Date(frontmatter.publishedAt), 'MMMM dd, yyyy')} by {frontmatter.author}.
          </p>
          {/* {frontmatter.lastUpdated && (
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200">
              <p>Last updated {format(new Date(frontmatter.lastUpdated), 'MMMM dd, yyyy')}.</p>
              <UnstyledLink
                href={COMMIT_HISTORY_LINK}
                className={clsx(
                  'inline-flex items-center gap-1 rounded-sm font-medium',
                  'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-primary-300',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                )}
              >
                <MdHistory className="text-lg" />
                <span>See changes</span>
              </UnstyledLink>
            </div>
          )} */}
          <div className="mt-6 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="inline-block text-base" />
              <Accent>{frontmatter.readingTime.text}</Accent>
            </div>
            {/* {meta?.devtoViews ? (
              <Tooltip
                tipChildren={
                  <>
                    {meta.devtoViews.toLocaleString()} views on{' '}
                    <CustomLink href="https://dev.to/theodorusclarence">dev.to</CustomLink>
                  </>
                }
                position="bottom"
              >
                <div className="flex items-center gap-1">
                  <HiOutlineEye className="inline-block text-base" />
                  <Accent>{meta?.views?.toLocaleString() ?? '–––'} views</Accent>
                </div>
              </Tooltip>
            ) : (
              <div className="flex items-center gap-1">
                <HiOutlineEye className="inline-block text-base" />
                <Accent>{meta?.views?.toLocaleString() ?? '–––'} views</Accent>
              </div>
            )} */}
          </div>
          {/* {!frontmatter?.englishOnly && (
            <CustomLink href={`/blog/${isEnglish ? 'id-' : ''}${cleanSlug}`} className="mt-4">
              Read in {isEnglish ? 'Bahasa Indonesia' : 'English'}
            </CustomLink>
          )} */}
        </div>

        <hr className="dark:border-gray-600" />
        <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
          <article className="mdx prose mt-4 transition-colors dark:prose-invert">
            <Component
              components={
                {
                  ...MDXComponents
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any
              }
            />
          </article>

          <aside className="py-4">
            <div className="sticky top-36">
              <TableOfContents toc={toc} minLevel={minLevel} activeSection={activeSection} />
            </div>
          </aside>
        </section>

        <figure className="mt-12">
          <Comment key={frontmatter.slug} />
        </figure>

        <h2 className="mt-10 dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">Recommendations</h2>

        <ul className="container mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 mb-10" data-fade="5">
          <ListComponent
            data={recommendations}
            renderItem={(post: BlogFrontmatter) => <BlogCard key={post.slug} post={post} />}
          />
          {/* {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
        ))
        ) : (
        <ContentPlaceholder />
        )} */}
        </ul>

      </main>
    </div>
  )
}
