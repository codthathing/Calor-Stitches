"use client";
import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import { BlogType } from "@/types/blogType";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface BlogContext {
  postTopic: string;
  setPostTopic: Dispatch<SetStateAction<string>>;
  id: number;
  postImage: string;
  postDetails: { id: number; text?: string | undefined; style?: boolean | undefined; inner_text?: { id: number; text: string; style: boolean; }[]; }[];
  postHead: string;
  postAuthor: any;
  postParagraph: string;
}

const BlogContext = createContext<BlogContext | null>(null);

export default function BlogProvider({ children, title }: { children: ReactNode; title: string }) {
  const blog = mockBlogPosts.find((post) => post.postHead === title);

  if (!blog) return null;

  const [postTopic, setPostTopic] = useState(title);

  const { id, postImage, postDetails, postAuthor, postHead, postParagraph } = blog as BlogType;

  return <BlogContext.Provider value={{ postTopic, setPostTopic, id, postImage, postAuthor, postHead, postDetails, postParagraph }}>{children}</BlogContext.Provider>;
}

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("Make sure this component exists in the BlogProvider tree");

  return context;
}