import CartAddressDiv from "@/components/cart/CartAddressDiv";
import CartCheckoutButton from "@/components/cart/CartCheckoutButton";
import CartPageFeedback from "@/components/cart/CartPageFeedback";
import CartPriceText from "@/components/cart/CartPriceText";
import CartProductSection from "@/components/cart/CartProductSection";
import PageSection from "@/components/layout/PageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import CartProvider from "@/store/providers/CartProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart Page"
}

export default async function CartPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "cart", linkArrow: false }
  ]

  return (
    <CartProvider>
      <PageSection id={"productReview"}>
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main className="productWishlistCartMain">
          <CartPageFeedback />
          <CartProductSection />
          <div id="cartTotalDiv">
            <p id="cartTotalText">Cart totals</p>
            <div className="cartPriceValueDiv">
              <p className="cartPriceText">Subtotal</p>
              <CartPriceText />
            </div>
            <CartAddressDiv />
            <CartCheckoutButton />
          </div>
        </main>
      </PageSection>
    </CartProvider>
  );
}