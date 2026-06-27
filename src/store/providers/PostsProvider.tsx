"use client";
import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import { BlogType } from "@/types/blogType";
import { createContext, ReactNode, useCallback, useContext, useEffect } from "react";
import { useArticleContext } from "./ArticleProvider";

interface PostsContext {
  categoryPosts: BlogType[];
}

const PostsContext = createContext<PostsContext | null>(null);

export default function PostsProvider({ children, title }: { children: ReactNode; title: string }) {
  const { setPageLinks } = useArticleContext();

  const getPosts = useCallback(() => {
    const updatedTitle = title.slice(0, 3) === "tag" ? title.slice(5) : title;
    const updatedPosts = mockBlogPosts.filter(({ postDetails }) => postDetails?.find(({ inner_text }) => inner_text?.some(({ text }) => text === updatedTitle)));

    return updatedPosts;
  }, []);

  useEffect(() => {
    setPageLinks([
      { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
      { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
      { id: 2, linkDirect: "", linkText: `Tag: ${title}`, linkArrow: false },
    ]);

    return () => {
      setPageLinks([]);
    }
  }, []);

  const categoryPosts = getPosts();

  return <PostsContext.Provider value={{ categoryPosts }}>{children}</PostsContext.Provider>;
}

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) throw new Error("Make sure this component exists in the PostsProvider tree");

  return context;
};
