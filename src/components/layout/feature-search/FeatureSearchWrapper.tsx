import { ReactNode } from "react";

export default function FeatureSearchWrapper({ CancelIcon, children }: { CancelIcon: ReactNode; children: ReactNode }) {
  return (
    <section id="searchSection" className="whiteBackSections">
      <div id="searchHeader" className="navBack">
        {CancelIcon}
      </div>
      {children}
    </section>
  );
}
