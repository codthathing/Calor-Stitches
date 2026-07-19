import { ReactNode, RefObject } from "react";

export default function PageSection({ id, ref, children }: { id?: string, ref?: RefObject<HTMLElement | null>; children: ReactNode }) {
  return (
    <section ref={ref} className="otherPages" id={id}>
      {children}
    </section>
  );
};
