import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import WishlistProductTemplate from "./WishlistProductTemplate";
import DefaultText from "../../components/common/DefaultText";

const WishlistProductDiv = () => {
  const { wishlistItems } = useContext(NavigateContext);

  return <div id="wishListItemSection">{wishlistItems.length > 0 ? <WishlistProductTemplate /> : <DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />}</div>;
};

export default WishlistProductDiv;
