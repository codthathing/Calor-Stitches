import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import ConfirmOTPForm from "../components/confirm/ConfirmOTPForm";
import PageSection from "../components/layout/PageSection";

export default function ConfirmPage() {
  const { setAccount, setPresentRegister } = useContext(NavigateContext);

  const [searchParams] = useSearchParams();
  const [pageLink, pageHead, pageText] = [searchParams.get("link"), searchParams.get("head"), searchParams.get("text")];

  usePageLoadEffects({effectsArray: [{effect: setAccount, value: false}, {effect: setPresentRegister, value: "LOGIN"}]});

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: pageLink, linkArrow: false },
  ];

  return (
    <PageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="confirm-main">
        <p id="confirm-head">{pageHead}</p>
        <p id="confirm-text">Hey {"John"},<br /> Thank you for choosing <span className="confirm-span">Calor Stiches</span>. Use the following OTP to complete the procedure to {pageText}. OTP is valid for only <span className="confirm-span">5 minutes</span>. Do not share this code with anyone.</p>
        <ConfirmOTPForm />
      </main>
    </PageSection>
  );
}