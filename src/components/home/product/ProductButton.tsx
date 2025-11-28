"use client";
import PageButtons from "@/components/common/PageButtons";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";

export default function ProductButton({ linkTo }: { linkTo: string }) {
  const navigate = useNavigateToPage();

  return <PageButtons type={"button"} buttonType={"white-button"} buttonClass={"view-button"} buttonFunction={() => navigate(linkTo)} text={"view all"} />;
}
