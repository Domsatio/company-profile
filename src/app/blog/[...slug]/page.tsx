// app/blog/[...slug]/page.tsx
import { FC } from "react";
import { useRouter } from "next/router";
import {
  getFileBySlug,
  getFileSlugArray,
  getRecommendations,
} from "@/lib/mdx.server";
import { ParsedUrlQuery } from "querystring";
import SingleBlogClient from "./singleBlogClient";
import { BlogType } from "@/types/frontmatters";

interface Params extends ParsedUrlQuery {
  slug: string[];
}

interface PostPageProps {
  params: Params;
}

// export async function generateStaticParams() {
//   const posts = await getFileSlugArray('blog');

//   console.log({posts: posts});

//   if (!Array.isArray(posts)) {
//     console.error('getAllSlugs did not return an array');
//     return [];
//   }

//   return {
//     paths: posts.map((slug) => ({
//       params: {
//         slug,
//       },
//     })),
//     fallback: false,
//   };
// }

const SingleBlogPage: FC<PostPageProps> = async ({ params }) => {
  const { slug } = params;

  const post = (await getFileBySlug("blog", slug.join("/"))) as BlogType;
  const recommendations = await getRecommendations(slug.join("/"));

  return (
    <SingleBlogClient
      code={post.code}
      frontmatter={post.frontmatter}
      recommendations={recommendations}
    />
  );
};

export default SingleBlogPage;

export async function generateStaticParams() {
  const posts = await getFileSlugArray("blog");

  if (!Array.isArray(posts)) {
    console.error("getFileSlugArray did not return an array");
    return [];
  }

  // Return an array of parameter objects with `slug` as an array (for `[...slug]`)
  return posts.map((slug) => ({
    slug: slug, // Convert `slug` to array format if needed
  }));
}