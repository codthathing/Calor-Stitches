import CheckoutLoginDiv from "@/components/checkout/CheckoutLoginDiv";
import CheckoutSection from "@/components/checkout/CheckoutSection";
import PageSection from "@/components/layout/PageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout Page"
}

export default function CheckoutPage() {
  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "checkout", linkArrow: false }
  ]

  return (
    <PageSection id={"productReview"}>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="checkoutMain">
        <CheckoutLoginDiv />
        <CheckoutSection />
      </main>
    </PageSection>
  );
}