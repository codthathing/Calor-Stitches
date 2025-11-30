import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateProvider";
import WishlistProductTemplate from "./WishlistProductTemplate";
import DefaultText from "../../common/DefaultText";

const WishlistProductDiv = () => {
  const { wishlistItems } = useContext(NavigateContext);

  return <div id="wishListItemSection">{wishlistItems.length > 0 ? <WishlistProductTemplate /> : <DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />}</div>;
};

export default WishlistProductDiv;
