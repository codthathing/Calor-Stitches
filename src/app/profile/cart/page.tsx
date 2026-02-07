import CartProductDiv from "@/components/layout/user-cart/CartProductDiv";
import UserCartCancelIcon from "@/components/layout/user-cart/UserCartCancelIcon";

export default function CartPage() {
  return (
    <section className="navSections">
      <main id="cartSection" className="whiteBackSections">
        <div className="cartEnds" id="cartHeader">
          <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
          <UserCartCancelIcon />
        </div>
        <CartProductDiv />
        <footer id="cartFooter" className="cartEnds"></footer>
      </main>
    </section>
  );
}
