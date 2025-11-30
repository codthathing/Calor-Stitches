"use client";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";

interface PostDetailsLink {
  inner_text?: { id: number; text: string; style: boolean }[];
  linkClass: string;
}

export default function PostDetailsLinks({ inner_text, linkClass }: PostDetailsLink) {
  const navigate = useNavigateToPage();

  return (
    <>
      {inner_text && (
        <div>
          {inner_text.map(({ id, text, style }) => (
            <span onClick={() => navigate(`/blog/post/${text}`)} className={linkClass} key={id}>
              {text}
              {style && ","}{" "}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
