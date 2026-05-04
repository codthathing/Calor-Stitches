import CartTotalMain from "./CartTotalMain";
import DefaultText from "@/components/common/DefaultText";
import UserCartWrapper from "./UserCartWrapper";

export default function CartProductDiv() {
  return <UserCartWrapper ElementOne={<CartTotalMain />} ElementTwo={<DefaultText textStyle={"start"} text={"No products in the cart"} />} />
};
