import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllFilesFrontmatter } from "@/lib/mdx.server";
import { sortByDate, getTags } from "@/lib/mdx.client";
import ListComponent from "@/components/ListComponent";
import BlogClient from "./blogClient";

import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters";

async function getBlogs() {
  const files = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(posts);

  return { props: { posts, tags } };
}

export default async function page() {
  const files = await getAllFilesFrontmatter("blog");
  const posts = sortByDate(files);

  // Accumulate tags and remove duplicate
  const tags = getTags(posts);

  return (
    <div className="mx-auto">
      <BlogClient posts={posts} tags={tags} />
    </div>
  );
}


