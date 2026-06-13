import Link from "next/link";
import { Fragment } from "react";

export default function FooterLinks({ type, linkTexts }: { type: string; linkTexts: { id: number; text: string }[] }) {
  return (
    <nav className="linkNav">
      {linkTexts.map(({ id, text }) => {
        return (
          <Fragment key={id}>
            {type === "link" ? (
              <Link style={{ textDecoration: "none" }} href={`/collection/${text}`} className="linkText">
                {text}
              </Link>
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
