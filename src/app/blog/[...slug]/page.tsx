import { FC } from "react";
import {
  getFileBySlug,
  getFileSlugArray,
  getRecommendations,
} from "@/lib/mdx.server";
import { ParsedUrlQuery } from "querystring";
import SingleBlogClient from "./singleBlogClient";
import { BlogType } from "@/types/frontmatter.type";
import { SectionWrapper } from "@/components/Layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Params extends ParsedUrlQuery {
  slug: string[];
}

interface PostPageProps {
  params: Params;
}

const SingleBlogPage: FC<PostPageProps> = async ({ params }) => {
  const { slug } = params;

  const post = (await getFileBySlug("blog", slug.join("/"))) as BlogType;
  const recommendations = await getRecommendations(slug.join("/"));

  return (
    <SectionWrapper className="flex flex-col px-4 md:gap-4 md:px-0 py-5 md:py-5">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-semibold">{post.frontmatter.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <SingleBlogClient
        code={post.code}
        frontmatter={post.frontmatter}
        recommendations={recommendations}
      />
    </SectionWrapper>
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
