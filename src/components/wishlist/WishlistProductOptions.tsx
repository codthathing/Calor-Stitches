import { useNavigateContext } from "@/store/providers/NavigateProvider";
import ProductOptions from "../product-template/ProductOptions";

interface WishlistProductOptions {
  id: number;
  productDetails?: { cartSize?: string; cartColor?: string };
  productName: string;
}

export default function WishlistProductOptions({ id, productDetails, productName } : WishlistProductOptions) {
  const { wishlistItems } = useNavigateContext();

  return (
    <div className="wishlistToCartDiv">
      <ProductOptions id={id} productDetails={productDetails} productName={productName} buttonClass={"wishlistToCartBtn"} itemsArray={wishlistItems} />
    </div>
  );
}
