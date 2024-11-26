import * as React from "react";
import type { Metadata } from 'next'
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { sortByDate, getTags } from "@/lib/mdx.client";
import BlogClient from "./blogClient";
import { SectionWrapper } from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: 'Blog | Domsat - Crafted with Passion and Precision',
  description: 'Blog | Domsat Company Profile',
  icons: {
    icon: '/assets/images/Favicon.svg'
  }
}

export default async function page() {
  const files = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(posts);

  return (
    <SectionWrapper className="flex flex-col px-4 md:gap-4 md:px-0 py-5 md:py-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

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


