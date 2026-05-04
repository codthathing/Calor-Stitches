"use client";
import { useBlogContext } from "@/store/providers/BlogProvider";
import Link from "next/link";

export default function PostCategoryDetails() {
  const { postDetails } = useBlogContext();
  return (
    <>
      {postDetails &&
        postDetails
          .filter(({ inner_text }) => inner_text)
          .map(({ id, inner_text }) => {
            return (
              <div id="post-category-div" key={id}>
                {inner_text &&
                  inner_text.map(({ id, text: category, style }) => (
                    <Link href={`/posts/${category}`} className="post-category-text" key={id}>
                      {category}
                      {style && ","}{" "}
                    </Link>
                  ))}
              </div>
            );
          })}
    </>
  );
}
