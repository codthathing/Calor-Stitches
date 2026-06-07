import ConfirmOTPForm from "@/components/confirm/ConfirmOTPForm";
import PageSection from "@/components/layout/PageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OTP Confirmation Page",
}

export default async function ConfirmPage({ searchParams }: { searchParams: Promise<{ link: string; head: string; text: string }> }) {
  const { link, head, text } = await searchParams;

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: link, linkArrow: false },
  ];

  return (
    <PageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="confirm-main">
        <p id="confirm-head">{head}</p>
        <p id="confirm-text">Hey {"John"},<br /> Thank you for choosing <span className="confirm-span">Calor Stiches</span>. Use the following OTP to complete the procedure to {text}. OTP is valid for only <span className="confirm-span">5 minutes</span>. Do not share this code with anyone.</p>
        <ConfirmOTPForm />
      </main>
    </PageSection>
  );
}