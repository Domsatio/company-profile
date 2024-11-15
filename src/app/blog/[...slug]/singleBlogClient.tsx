"use client";
import React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { BlogFrontmatter, BlogType } from "@/types/frontmatters";
import MDXComponents from "@/components/content/MDXcomponents";
import "../../styles/mdx.css";
import TableOfContents, {
  HeadingScrollSpy,
} from "@/components/content/TableOfContents";
import useScrollSpy from "@/hooks/useScrollspr";
import Comment from "@/components/content/Comment";

type SingleBlogPageProps = {
  recommendations: BlogFrontmatter[];
} & BlogType;

export default function SingleBlogClient({
  code,
  frontmatter,
  recommendations,
}: SingleBlogPageProps) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  const activeSection = useScrollSpy();

  const [toc, setToc] = React.useState<HeadingScrollSpy>();
  const minLevel =
    toc?.reduce((min, item) => (item.level < min ? item.level : min), 10) ?? 0;

  React.useEffect(() => {
    const headings = document.querySelectorAll(".mdx h1, .mdx h2, .mdx h3");

    const headingArr: HeadingScrollSpy = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace("H", "");
      const text = heading.textContent + "";

      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [frontmatter.slug]);

  return (
    <div>
      <main className="relative max-w-7xl mx-auto mb-10">
        <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
          <article className="mdx prose mt-4 transition-colors dark:prose-invert">
            <Component
              components={
                {
                  ...MDXComponents,
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any
              }
            />
          </article>

          <aside className="py-4">
            <div className="sticky top-36">
              <TableOfContents
                toc={toc}
                minLevel={minLevel}
                activeSection={activeSection}
              />
            </div>
          </aside>
        </section>

        <figure className="mt-12">
          <Comment key={frontmatter.slug} />
        </figure>
      </main>
    </div>
  );
}
