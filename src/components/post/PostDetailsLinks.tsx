"use client";
import { useRouter } from "next/navigation";

interface PostDetailsLink {
  inner_text?: { id: number; text: string; style: boolean }[];
  linkClass: string;
}

export default function PostDetailsLinks({ inner_text, linkClass }: PostDetailsLink) {
  const router = useRouter();

  return (
    <>
      {inner_text && (
        <div>
          {inner_text.map(({ id, text, style }) => (
            <span onClick={() => router.push(`/posts/${text}`)} className={linkClass} key={id}>
              {text}
              {style && ","}{" "}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
