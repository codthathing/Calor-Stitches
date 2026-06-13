import PageButtons from "@/components/common/PageButtons";
import Link from "next/link";

export default function HomePostButton({ type, buttonClass, postHead: topic }: { type: string, buttonClass: string, postHead: string }) {  
  return <Link style={{ textDecoration: "none" }} href={`/blog/${topic}`}>{type === "link" ? <PageButtons type={"text"} textClass={buttonClass} text={"read more"} /> : <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} text={"read more"} />}</Link>;
}
