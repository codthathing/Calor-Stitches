import { Fragment } from "react";
import NavigationLink from "../common/NavigationLink";

export default function FooterLinks({ type, linkTexts }: { type: string; linkTexts: { id: number; text: string }[] }) {
  return (
    <nav className="linkNav">
      {linkTexts.map(({ id, text }) => {
        return (
          <Fragment key={id}>
            {type === "link" ? (
              <NavigationLink href={`/collection/${text}`} className="linkText">
                {text}
              </NavigationLink>
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
