import * as React from "react";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { sortByDate, getTags } from "@/lib/mdx.client";
import BlogClient from "./blogClient";
import { SectionWrapper } from "@/components/Layout";

export const metadata = {
  title: 'Blog',
  description: 'Blog page'
};

export default async function page() {
  const files = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(posts);

  return (
    <SectionWrapper className="flex flex-col px-4 md:gap-4 md:px-0 py-5 md:py-5">
      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-2 dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent">Blog</h1>
        <p className="text-sm md:text-base">
          Explore our collection of insightful articles, tutorials, and industry updates.
        </p>
      </div>

      <BlogClient
        posts={posts}
        tags={tags}
      />
    </SectionWrapper>
  );
}


