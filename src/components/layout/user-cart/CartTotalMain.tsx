import PageButtons from "@/components/common/PageButtons";
import Link from "next/link";
import CartTotalText from "./CartTotalText";

export default function CartTotalMain() {
  return (
    <main id="cartTotalPriceMain">
      <div id="totalPriceDiv">
        <p className="totalPrice" id="totalPriceText">Subtotal:</p>
        <CartTotalText />
      </div>
      <div id="cartButtonsDiv">
        <Link href={"/cart"} style={{ textDecoration: "none" }}><PageButtons type={"button"} buttonType={"black-button"} buttonClass={"navBtn cartButtons"} text={"view cart"} /></Link>
        <Link href={"/checkout"} style={{ textDecoration: "none" }}><PageButtons type={"button"} buttonType={"white-button"} buttonClass={"navBtn cartButtons"} text={"checkout"} /></Link>
      </div>
    </main>
  );
};
