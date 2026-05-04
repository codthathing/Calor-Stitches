import PageSection from "@/components/layout/PageSection";
import PaymentForm from "@/components/payment/PaymentForm";
import PaymentProvider from "@/store/providers/PaymentProvider";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import Image from "next/image";
import PaymentFormFeedback from "@/components/payment/PaymentFormFeedback";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Page"
}

export default function PaymentPage() {
  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "Payment", linkArrow: false },
  ];

  return (
    <PaymentProvider>
      <PageSection>
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main id="card-payment-main">
          <PaymentFormFeedback />
          <section id="card-payment-section">
            <div id="card-payment-image-div">
              <Image src={"/assets/bank-card.jpg"} width={100} height={50} alt="bank_card" loading="eager" fetchPriority="high" id="card-payment-image" />
            </div>
            <PaymentForm />
          </section>
        </main>
      </PageSection>
    </PaymentProvider>
  );
}
