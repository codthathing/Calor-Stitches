"use client";
import { Fragment } from "react";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";

export default function FooterLinks({ type, linkTexts }: { type: string; linkTexts: { id: number; text: string }[] }) {
  const navigate = useNavigateToPage();

  return (
    <nav className="linkNav">
      {linkTexts.map(({ id, text }) => {
        return (
          <Fragment key={id}>
            {type === "link" ? (
              <span onClick={() => navigate(`/product/collection/${text}`)} className="linkText">
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
