"use client";
import PageButtons from "@/components/common/PageButtons";
import { useRouter } from "next/navigation";

export default function ProductButton({ linkTo }: { linkTo: string }) {
  const router = useRouter();

  return <PageButtons type={"button"} buttonType={"white-button"} buttonClass={"view-button"} buttonFunction={() => router.push(linkTo)} text={"view all"} />;
}
