import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import ProductTopics from "../components/product_topics";
import CartProduct from "./cart_product";
import CartUpdateBtn from "./cart_update_btn";
import DefaultText from "../../../header/header_pages/components/default_text";

const CartSection = () => {
  const { cartItems } = useContext(ToggleRegister);
  const cartTopics = ["Products", "Price", "Quantity", "Subtotal"];

  if (cartItems.length > 0) {
    return (
      <>
        <section className="productWishlistCartSection">
          <ProductTopics productTopicsArray={cartTopics} />
          <CartProduct />
        </section>
        <CartUpdateBtn />
      </>
    );
  } else {
    return (
      <DefaultText textStyle={"center"} text={"No products in the cart"}/>
    );
  };
};

export default CartSection;