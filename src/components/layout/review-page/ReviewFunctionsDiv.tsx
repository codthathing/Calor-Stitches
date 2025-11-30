"use client";
import CartItemAmt from "@/components/cart/CartItemAmt";
import AddToCart from "@/components/product-template/AddToCart";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function ReviewFunctionsDiv({ id, cartAmt }: { id: number; cartAmt?: number }) {
  const { products, setProducts } = useNavigateContext();

  return (
    <div className="productToCart">
      <CartItemAmt id={id} cartAmt={cartAmt} itemsArray={products} setItemsArray={setProducts} />
      <AddToCart id={id} buttonClass={"productToCartButton"} itemsArray={products} />
    </div>
  );
}
