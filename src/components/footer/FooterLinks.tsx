"use client";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function FooterLinks({ type, linkTexts }: { type: string; linkTexts: { id: number; text: string }[] }) {
  const router = useRouter();

  return (
    <nav className="linkNav">
      {linkTexts.map(({ id, text }) => {
        return (
          <Fragment key={id}>
            {type === "link" ? (
              <span onClick={() => router.push(`/collection/${text}`)} className="linkText">
                {text}
              </span>
            ) : (
              <p key={id} className="linkText">
                {text}
              </p>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
