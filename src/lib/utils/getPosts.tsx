import { BlogType } from "@/types/blogType";
import { mockBlogPosts } from "../data/mockBlogPosts";

export async function getPosts(): Promise<BlogType[]> {
  return mockBlogPosts;
}