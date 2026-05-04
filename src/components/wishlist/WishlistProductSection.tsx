import ProductTopics from "../ui/ProductTopics";
import DefaultText from "../common/DefaultText";
import WishlistWrapper from "./WishlistWrapper";

export default function WishlistProductSection() {
  const wishlistTopics = ["Products", "Price", "Stock Status"];

  return <WishlistWrapper ElementOne={<ProductTopics productTopicsArray={wishlistTopics} />} ElementTwo={<DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />} />
};
