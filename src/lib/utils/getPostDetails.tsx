import { BlogType } from "@/types/blogType";
import { getPosts } from "./getPosts";

export async function getPostDetails(title: string): Promise<BlogType|null> {
  const posts = await getPosts();

  const post = posts.find((post) => post.postHead === title) || null;
  
  return post;
}