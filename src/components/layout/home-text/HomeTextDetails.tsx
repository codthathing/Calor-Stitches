"use context";
import PageButtons from "@/components/common/PageButtons";
import { scrollToSection } from "@/lib/utils/scrollToSection";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function HomeTextDetails({ pageDetails }: { pageDetails: { text: string; array: { id: number; head: string; style: boolean }[] } }) {
  const { product_section } = useNavigateContext();

  return (
    <div id="displayText">
      <p id="disParagraph" className="paragraphStyles">YOU CAN HAVE ANYTHING YOU WANT IF YOU DRESS FOR IT</p>
      <h1 id="disHead">{pageDetails.text}</h1>
      <PageButtons type={"button"} text={"SHOP NOW"} buttonType={"white-button"} buttonClass={"shop-btn"} buttonFunction={() => scrollToSection(product_section)} />
      <div id="disDiv">
        {pageDetails.array.map(({ id, style }) => (
          <span key={id} className={`dispay-number ${style ? "style-display-number" : ""}`}>
            {id}
          </span>
        ))}
      </div>
    </div>
  );
}
