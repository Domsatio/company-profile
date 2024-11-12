import { User } from "./user.type";

type comment = {
  id: string;
  postId: string;
  userId: string;
  body: string;
}

export type Blog = {
  id: string;
  authorId: string;
  title: string;
  slug: string;
  body: string;
  thumbnail: string;
  published: boolean;
  categories: string[];
};

export type UpdateBlog = Omit<Blog, "id" | "userId">;

// export type GetBlog = Pick<
//   Blog,
//   | "id"
//   | "title"
//   | "slug"
//   | "body"
//   | "thumbnail"
//   | "authorId"
//   | "categories"
//   | "published"
// > & {
//   createdAt: string;
// };

export type GetBlog =  & {
  createdAt: string;
}

export type GetBlogWithAuthor = GetBlog & Omit<User, "password" | "role">;


