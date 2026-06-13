import Link from "next/link";

interface PostDetailsLink {
  inner_text?: { id: number; text: string; style: boolean }[];
  linkClass: string;
}

export default function PostDetailsLinks({ inner_text, linkClass }: PostDetailsLink) {
  return (
    <>
      {inner_text && (
        <div>
          {inner_text.map(({ id, text, style }) => (
            <Link style={{ textDecoration: "none" }} href={`/posts/${text}`} className={linkClass} key={id}>
              {text}
              {style && ","}{" "}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
