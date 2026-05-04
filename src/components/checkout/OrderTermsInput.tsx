"use client";
import { useCheckoutContext } from "@/store/providers/CheckoutProvider";

export default function OrderTermsInput() {
  const { seenTerms, setSeenTerms } = useCheckoutContext();

  return <input type="checkbox" id="termsCheckbox" onClick={() => setSeenTerms(!seenTerms)} />;
}
