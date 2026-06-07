"use client";
import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import { BlogType } from "@/types/blogType";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { useArticleContext } from "./ArticleProvider";

interface BlogContext {
  postTopic: string;
  setPostTopic: Dispatch<SetStateAction<string>>;
  id: number;
  postImage: string;
  postDetails: { id: number; text?: string | undefined; style?: boolean | undefined; inner_text?: { id: number; text: string; style: boolean }[] }[];
  postHead: string;
  postAuthor: any;
  postParagraph: string;
}

const BlogContext = createContext<BlogContext | null>(null);

export default function BlogProvider({ children, title }: { children: ReactNode; title: string }) {
  const blog = mockBlogPosts.find((post) => post.postHead === title);
  const { setPageLinks } = useArticleContext();
  const [postTopic, setPostTopic] = useState(title);

  useEffect(() => {
    if (!blog) return;
    setPageLinks([
      { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
      { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
      { id: 2, linkDirect: "", linkText: blog.postDetails.find(({ inner_text }) => inner_text)?.inner_text?.find(({ id }) => id === 0)?.text as string, linkArrow: true },
      { id: 3, linkDirect: "", linkText: title, linkArrow: false },
    ]);
  }, []);

  if (!blog) return null;

  const { id, postImage, postDetails, postAuthor, postHead, postParagraph } = blog;

  return <BlogContext.Provider value={{ postTopic, setPostTopic, id, postImage, postAuthor, postHead, postDetails, postParagraph }}>{children}</BlogContext.Provider>;
}

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("Make sure this component exists in the BlogProvider tree");

  return context;
};
