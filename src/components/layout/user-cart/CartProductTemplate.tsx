import UserCartDetailsWrapper from "@/components/layout/user-cart/UserCartDetailsWrapper";
import { CartProductType } from "@/types/productType";
import Image from "next/image";
import CartDeleteIcon from "./CartDeleteIcon";
import CartProductName from "./CartProductName";

export default function CartProductTemplate({ cartArray }: { cartArray: CartProductType[] }) {
  return (
    <div id="cartProductInnerDiv">
      {cartArray.map(({ id, productImage, productName, productPrice, cartSize, cartColor, cartAmt }) => {
        return (
          <main key={id} className="cartProductMain">
            <Image src={productImage} alt={productName} width={75} height={100} loading="lazy" className="cartProductImage" />
            <div className="cartProductDetails">
              <CartDeleteIcon id={id} cancelClass={"cartRemove"} />
              <UserCartDetailsWrapper productPrice={productPrice} cartAmt={cartAmt}>
                <CartProductName productName={productName} />
                {cartColor && <p className="cartProductText">Color: <span style={{ textTransform: "capitalize" }}>{cartColor}</span></p>}
                {cartSize && <p className="cartProductText">Size: <span style={{ textTransform: "uppercase" }}>{cartSize}</span></p>}
              </UserCartDetailsWrapper>
            </div>
          </main>
        );
      })}
    </div>
  );
};
