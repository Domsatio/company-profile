"use client";
import * as React from "react";
import ListComponent from "@/components/ListComponent";
import { BlogFrontmatter } from "@/types/frontmatters";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogClient({
  posts,
  // tags,
}: {
  posts: BlogFrontmatter[];
  // tags: string[];
}) {
  //   const code: string = "";
  //   const Component = React.useMemo(() => getMDXComponent(code), [code]);
  // const [filteredPosts, setFilteredPosts] = React.useState<
  //   Array<BlogFrontmatter & InjectedMeta>
  // >(() => [...posts]);

  return (
    <ul
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      data-fade="5"
    >
      <ListComponent
        data={posts}
        renderItem={(post: BlogFrontmatter) => (
          <BlogCard key={post.slug} post={post} />
        )}
      />
      {/* {currentPosts.length > 0 ? (
        currentPosts.map((post) => (
        ))
        ) : (
        <ContentPlaceholder />
        )} */}
    </ul>
  );
}
