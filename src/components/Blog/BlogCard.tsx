import clsx from "clsx";
import { format } from "date-fns";
import * as React from "react";
import { HiOutlineClock, HiOutlineUser } from 'react-icons/hi';

import Accent from "@/components/Accent";
import Tag from "@/components/Tag";
import NextImage from "../NextImage";
// import CloudinaryImg from '@/components/images/CloudinaryImg';
import UnstyledLink from "@/components/links/UnstyledLink";

import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters";

type BlogCardProps = {
  post: BlogFrontmatter & InjectedMeta;
  checkTagged?: (tag: string) => boolean;
} & React.ComponentPropsWithoutRef<"li">;

export default function BlogCard({
  post,
  className,
  checkTagged,
  onClick,
}: BlogCardProps) {
  return (
    <li
      className={clsx(
        "w-full rounded-3xl border border-border",
        "scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu",
        "transition duration-100",
        "motion-reduce:hover:scale-100",
        className
      )}
      onClick={onClick}
    >
      <UnstyledLink
        className="block h-full rounded-3xl focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
        href={`/blog/${post.slug}`}
      >
        <div className="relative">
          <NextImage
            className="pointer-events-none overflow-hidden rounded-t-3xl"
            blurClassName="filter blur-sm"
            src={post.banner}
            alt={`${post.title} banner`}
            width={1200}
            height={(1200 * 2) / 5}
          />
          <div
            className={clsx(
              "absolute bottom-0 w-full px-4 py-2",
              "mt-2 flex flex-wrap justify-end gap-x-2 gap-y-1 text-sm text-foreground"
            )}
          >
            {post.tags.split(",").map((tag) => (
              <Tag
                tabIndex={-1}
                className="bg-opacity-80 dark:!bg-opacity-60"
                key={tag}
              >
                {checkTagged?.(tag) ? <Accent>{tag}</Accent> : tag}
              </Tag>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-foreground">{post.title}</h4>
          <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-foreground/80 dark:text-zinc-400">
            <div className="flex items-center gap-1">
              <HiOutlineClock className="inline-block text-base" />
              <Accent>{post.readingTime.text}</Accent>
            </div>
            <div className="flex items-center gap-1">
              <HiOutlineUser className="inline-block text-base" />
              <Accent>{post.author}</Accent>
            </div>
            {/* <div className="flex items-center gap-1">
              <HiOutlineEye className="inline-block text-base" />
              <Accent>{post?.views?.toLocaleString() ?? "–––"} views</Accent>
            </div> */}
          </div>
          <p className="mb-2 mt-4 text-sm text-foreground/80 dark:text-zinc-400">
            <span className="font-bold text-foreground">
              {format(
                new Date(post.lastUpdated ?? post.publishedAt),
                "MMMM dd, yyyy"
              )}
            </span>
          </p>
          <p className="text-sm text-foreground/80 dark:text-zinc-400">
            {post.description}
          </p>
        </div>
      </UnstyledLink>
    </li>
  );
}
