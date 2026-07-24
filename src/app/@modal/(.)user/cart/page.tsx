import CartProductDiv from "@/components/layout/user-cart/CartProductDiv";
import UserCartCancelIcon from "@/components/layout/user-cart/UserCartCancelIcon";

export const dynamic = "force-dynamic";

export default async function CartPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main className="cart-section whiteBackSections">
      <div className="cartEnds" id="cartHeader">
        <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
        <UserCartCancelIcon />
      </div>
      <CartProductDiv />
      <footer id="cartFooter" className="cartEnds"></footer>
    </main>
  );
}
