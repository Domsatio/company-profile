import * as React from "react";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { sortByDate, getTags } from "@/lib/mdx.client";
import BlogClient from "./blogClient";


export default async function page() {
  const files = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(posts);
 
  return (
    <div className="mx-auto dark:bg-dark">
      <BlogClient 
        posts={posts} 
        tags={tags} 
      />
    </div>
  );
}


