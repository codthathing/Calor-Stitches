"use client";
import { mockBlogPosts } from "@/lib/data/mockBlogPosts";
import { BlogType } from "@/types/blogType";
import { createContext, ReactNode, useCallback, useContext } from "react";

interface PostsContext {
  categoryPosts: BlogType[]
}

const PostsContext = createContext<PostsContext | null>(null);

export default function PostsProvider({ children, title } : { children: ReactNode; title: string }) {
  const getPosts =  useCallback(() => {
    const updatedTitle = title.slice(0, 3) === "tag" ? title.slice(5) : title;
    const updatedPosts = mockBlogPosts.filter(({ postDetails }) => postDetails?.find(({ inner_text }) => inner_text?.some(({ text }) => text === updatedTitle)));
    
    return updatedPosts;
  }, []);

  const categoryPosts = getPosts();

  return <PostsContext.Provider value={{ categoryPosts }}>{children}</PostsContext.Provider>
}

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) throw new Error("Make sure this component exists in the PostsProvider tree");

  return context;
}