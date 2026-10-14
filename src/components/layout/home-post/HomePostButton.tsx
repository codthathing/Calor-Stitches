import NavigationLink from "@/components/common/NavigationLink";
import PageButtons from "@/components/common/PageButtons";

export default function HomePostButton({ type, buttonClass, postHead: topic }: { type: string, buttonClass: string, postHead: string }) {  
  return <NavigationLink href={`/blog/${topic}`}>{type === "link" ? <PageButtons type={"text"} textClass={buttonClass} text={"read more"} /> : <PageButtons type={"button"} buttonType={"black-button"} buttonClass={buttonClass} text={"read more"} />}</NavigationLink>;
}
