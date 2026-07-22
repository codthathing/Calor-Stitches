import CartProductDiv from "@/components/layout/user-cart/CartProductDiv";
import UserCartCancelIcon from "@/components/layout/user-cart/UserCartCancelIcon";

export const dynamic = "force-dynamic";

export default function CartPage() {
  return (
    <main id="cartSection" className="whiteBackSections">
      <div className="cartEnds" id="cartHeader">
        <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
        <UserCartCancelIcon />
      </div>
      <CartProductDiv />
      <footer id="cartFooter" className="cartEnds"></footer>
    </main>
  );
}
