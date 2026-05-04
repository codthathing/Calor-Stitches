import ProductTopics from "../ui/ProductTopics";
import DefaultText from "../common/DefaultText";
import CartWrapper from "./CartWrapper";

export default function CartProductSection() {
  const cartTopics = ["Products", "Price", "Quantity", "Subtotal"];

  return <CartWrapper ElementOne={<ProductTopics productTopicsArray={cartTopics} />} ElementTwo={<DefaultText textStyle={"center"} text={"No products in the cart"}/>} />

};
