'use client'
import * as React from 'react'
import ListComponent from '@/components/ListComponent'
import { BlogFrontmatter, InjectedMeta } from '@/types/frontmatter.type'
import BlogCard from '@/components/Blog/BlogCard'
import { HiCalendar, HiEye } from 'react-icons/hi'
import SortListbox, { SortOption } from '@/components/SortListBox'
import { getTags, sortDateFn } from '@/lib/mdx.client'
import StyledInput from '@/components/Form/StyledInput'
import { getFromSessionStorage } from '@/lib/helper.client'
import useInjectContentMeta from '@/hooks/useInjectContentMeta'
import Tag from '@/components/Tag'
import Accent from '@/components/Accent'
import { SkipNavTag } from '@/components/Tag'
import { Button } from '@/components/ui/button'

const sortOptions: Array<SortOption> = [
  {
    id: 'date',
    name: 'Urutkan berdasarkan tanggal',
    icon: HiCalendar
  },
  {
    id: 'views',
    name: 'Urutkan berdasarkan popularitas',
    icon: HiEye
  }
]

export default function BlogClient({ posts, tags }: { posts: BlogFrontmatter[]; tags: string[] }) {
  const [sortOrder, setSortOrder] = React.useState<SortOption>(
    () => sortOptions[Number(getFromSessionStorage('blog-sort')) || 0]
  )
  const [isEnglish, setIsEnglish] = React.useState<boolean>(true)

  //#region  //*=========== Search ===========
  const [search, setSearch] = React.useState<string>('')
  const [filteredPosts, setFilteredPosts] = React.useState<Array<BlogFrontmatter & InjectedMeta>>(() => [...posts])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const clearSearch = () => setSearch('')
  const populatedPosts = useInjectContentMeta('blog', posts)

  React.useEffect(() => {
    const results = populatedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase()) ||
        // Check if splitted search contained in tag
        search
          .toLowerCase()
          .split(' ')
          .every((tag) => post.tags.includes(tag))
    )

    if (sortOrder.id === 'date') {
      results.sort(sortDateFn)
      sessionStorage.setItem('blog-sort', '0')
    } else if (sortOrder.id === 'views') {
      results.sort(
        (a: BlogFrontmatter & InjectedMeta, b: BlogFrontmatter & InjectedMeta) => (b?.views ?? 0) - (a?.views ?? 0)
      )
      sessionStorage.setItem('blog-sort', '1')
    }

    setFilteredPosts(results)
  }, [search, sortOrder.id, populatedPosts])
  //#endregion  //*======== Search ===========

  //#region  //*=========== Post Language Splitter ===========
  const englishPosts = filteredPosts.filter((p) => !p.slug.startsWith('id-'))
  const bahasaPosts = filteredPosts.filter((p) => p.slug.startsWith('id-'))
  const currentPosts = isEnglish ? englishPosts : bahasaPosts
  //#endregion  //*======== Post Language Splitter ===========

  //#region  //*=========== Tag ===========
  const toggleTag = (tag: string) => {
    // If tag is already there, then remove
    if (search.includes(tag)) {
      setSearch((s) =>
        s
          .split(' ')
          .filter((t) => t !== tag)
          ?.join(' ')
      )
    } else {
      // append tag
      setSearch((s) => (s !== '' ? `${s.trim()} ${tag}` : tag))
    }
  }

  /** Currently available tags based on filtered posts */
  const filteredTags = getTags(currentPosts)

  /** Show accent if not disabled and selected  */
  const checkTagged = (tag: string) => {
    return filteredTags.includes(tag) && search.toLowerCase().split(' ').includes(tag)
  }

  return (
    <div className='space-y-4'>
      <StyledInput
        data-fade="2"
        placeholder="Cari..."
        onChange={handleSearch}
        value={search}
        type="text"
      />
      <div
        className="flex flex-wrap items-baseline justify-start gap-2 text-sm text-foreground/80 dark:text-zinc-400"
        data-fade="3"
      >
        <span className="font-medium">Pilih topik:</span>
        <SkipNavTag>
          {tags.map((tag) => (
            <Tag key={tag} onClick={() => toggleTag(tag)} disabled={!filteredTags.includes(tag)}>
              {checkTagged(tag) ? <Accent>{tag}</Accent> : tag}
            </Tag>
          ))}
        </SkipNavTag>
      </div>
      <div
        className="relative z-10 flex flex-col items-end gap-4 md:flex-row md:items-center md:justify-between"
        data-fade="4"
      >
        <Button
          onClick={() => {
            setIsEnglish((b) => !b)
            clearSearch()
          }}
        >
          Read in {isEnglish ? 'Bahasa Indonesia' : 'English'}
        </Button>
        <SortListbox selected={sortOrder} setSelected={setSortOrder} options={sortOptions} />
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" data-fade="5">
        {currentPosts.length > 0 ? (
          <ListComponent
            data={currentPosts}
            renderItem={(post: BlogFrontmatter) => <BlogCard key={post.slug} post={post} />}
          />
        ) : (
          <h2 className="my-8 text-center sm:col-span-2 xl:col-span-4">
            <Accent>Postingan tidak ditemukan</Accent>
          </h2>
        )}
      </ul>
    </div>
  )
}
