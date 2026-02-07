import { ReactNode } from "react";

export default function PageSection({ id, children }: { id?: string, children: ReactNode }) {
  return (
    <section className="otherPages" id={id}>
      {children}
    </section>
  );
};
