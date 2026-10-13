import { BlogType } from "@/types/blogType";
import { getPosts } from "./getPosts";

export async function getBlogsPosts(title: string): Promise<BlogType[]> {
  const posts = await getPosts();

  const updatedTitle = title.slice(0, 3) === "tag" ? title.slice(5) : title;
  const updatedPosts = posts.filter(({ postDetails }) => postDetails?.find(({ inner_text }) => inner_text?.some(({ text }) => text === updatedTitle)));

  return updatedPosts;
}