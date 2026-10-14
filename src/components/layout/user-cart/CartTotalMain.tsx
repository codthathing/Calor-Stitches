import PageButtons from "@/components/common/PageButtons";
import CartTotalText from "./CartTotalText";
import NavigationLink from "@/components/common/NavigationLink";

export default function CartTotalMain() {
  return (
    <main id="cartTotalPriceMain">
      <div id="totalPriceDiv">
        <p className="totalPrice" id="totalPriceText">Subtotal:</p>
        <CartTotalText />
      </div>
      <div id="cartButtonsDiv">
        <NavigationLink href={"/cart"}><PageButtons type={"button"} buttonType={"black-button"} buttonClass={"navBtn cartButtons"} text={"view cart"} /></NavigationLink>
        <NavigationLink href={"/checkout"}><PageButtons type={"button"} buttonType={"white-button"} buttonClass={"navBtn cartButtons"} text={"checkout"} /></NavigationLink>
      </div>
    </main>
  );
};
