import { ReactNode } from "react";

export default function FeatureSearchWrapper({ className = "", CancelIcon, children }: { className?: string; CancelIcon: ReactNode; children: ReactNode }) {
  return (
    <section id="searchSection" className={`whiteBackSections ${className}`}>
      <div id="searchHeader" className="navBack">
        {CancelIcon}
      </div>
      {children}
    </section>
  );
}
