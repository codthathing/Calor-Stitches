"use client";
import PageButtons from "@/components/common/PageButtons";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function ReviewProductDetailsLink({ links, type }: { links: { id: number; text: string; style?: boolean }[]; type: string }) {
  const router = useRouter();

  return (
    <>
      {links.map(({ id, text, style = true }) => {
        return <Fragment key={id}>{type === "link" ? <PageButtons type={"text"} textClass={""} buttonFunction={() => router.push(`/collection/${text}`)} text={style ? `${text},` : `${text}`} /> : <span className="productDeliveryDetailsInnerText">{text}</span>}</Fragment>;
      })}
    </>
  );
}
