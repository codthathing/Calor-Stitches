import NavigationLink from "@/components/common/NavigationLink";
import PageButtons from "@/components/common/PageButtons";

export default function ProductButton({ linkTo }: { linkTo: string }) {
  return <NavigationLink href={linkTo}><PageButtons type={"button"} buttonType={"white-button"} buttonClass={"view-button"} text={"view all"} /></NavigationLink>;
}
