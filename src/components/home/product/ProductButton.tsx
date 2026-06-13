import PageButtons from "@/components/common/PageButtons";
import Link from "next/link";

export default function ProductButton({ linkTo }: { linkTo: string }) {
  return <Link href={linkTo} style={{ textDecoration: "none" }}><PageButtons type={"button"} buttonType={"white-button"} buttonClass={"view-button"} text={"view all"} /></Link>;
}
