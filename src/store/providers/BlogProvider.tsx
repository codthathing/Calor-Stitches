"use client";
import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useArticleContext } from "./ArticleProvider";
import { BlogType } from "@/types/blogType";

interface BlogContext {
  id: number;
  postImage: string;
  postDetails: { id: number; text?: string | undefined; style?: boolean | undefined; inner_text?: { id: number; text: string; style: boolean }[] }[];
  postHead: string;
  postAuthor: { profile_picture: string; name: string; description: string };
  postParagraph: string;
}

const BlogContext = createContext<BlogContext | null>(null);

export default function BlogProvider({ children, post }: { children: ReactNode; title: string; post: BlogType | null }) {
  const { setPageLinks } = useArticleContext();
  
  useEffect(() => {
    if (!post) return;

    setPageLinks([
      { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
      { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
      { id: 2, linkDirect: "", linkText: post.postDetails.find(({ inner_text }) => inner_text)?.inner_text?.find(({ id }) => id === 0)?.text as string, linkArrow: true },
      { id: 3, linkDirect: "", linkText: post["postHead"], linkArrow: false },
    ]);

    return () => { setPageLinks([]); }
  }, [post, setPageLinks]);

  if (!post) return null;

  const { id, postHead, postImage, postDetails, postAuthor, postParagraph } = post;

  return <BlogContext.Provider value={{ postHead, id, postImage, postAuthor, postDetails, postParagraph }}>{children}</BlogContext.Provider>;
}

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("Make sure this component exists in the BlogProvider tree");

  return context;
};
