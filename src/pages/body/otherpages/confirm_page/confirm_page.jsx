import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import {ToggleRegister} from "../../../contextpage";
import PageLinkTemplate from "../components/pagelinks";
import ConfirmForm from "./confirm_form";
import {usePageInitialEffects} from "../components/page_effects";

const ConfirmPage = () => {
  const { setAccount, setPresentRegister } = useContext(ToggleRegister);

  const [searchParams] = useSearchParams();
  const [pageLink, pageHead, pageText] = [searchParams.get("link"), searchParams.get("head"), searchParams.get("text")];

  usePageInitialEffects({effectsArray: [{effect: setAccount, value: false}, {effect: setPresentRegister, value: "LOGIN"}]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: pageLink, linkArrow: false },
  ];

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="confirm-main">
        <p id="confirm-head">{pageHead}</p>
        <p id="confirm-text">Hey {"John"},<br /> Thank you for choosing <span className="confirm-span">Calor Stiches</span>. Use the following OTP to complete the procedure to {pageText}. OTP is valid for only <span className="confirm-span">5 minutes</span>. Do not share this code with anyone.</p>
        <ConfirmForm />
      </main>
    </div>
  );
};

export default ConfirmPage;