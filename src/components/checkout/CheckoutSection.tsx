import CheckoutProvider from "@/store/providers/CheckoutProvider";
import BillSection from "./BillSection";
import OrderSection from "./OrderSection";
import CheckoutPageFeedback from "./CheckoutPageFeedback";

export default function CheckoutSection() {
  return (
    <CheckoutProvider>
      <CheckoutPageFeedback />
      <section id="billOrderSection">
        <BillSection />
        <OrderSection />
      </section>
    </CheckoutProvider>
  );
};