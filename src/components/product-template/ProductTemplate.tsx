import { GeneralProductType } from "@/types/productType";
import Image from "next/image";
import AddToWishList from "./AddToWishlist";
import ProductPrice from "./ProductPrice";
import ProductTemplateFooter from "../layout/product-template/ProductTemplateFooter";
import ProductStockAlert from "./ProductStockAlert";
import NavigationLink from "../common/NavigationLink";

export default function ProductTemplate({ productArray }: { productArray: GeneralProductType[] }) {
  return (
    <main id="mainProduct">
      {productArray.map(({ id, productAvailable, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, productDetails, wishlistStock }) => {
        return (
          <div className="productDiv" key={id}>
            <div className="productInnerDiv">
              <Image src={productImage} loading="lazy" width={100} height={75} style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", zIndex: "-1" }} alt={productName.toUpperCase()} />
              <NavigationLink href={`/review/${productName}`}>
                <section className="orderOptions">
                  <ProductStockAlert productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
                </section>
              </NavigationLink>
              <div className="optionBtnsDiv">
                <div className="optionDiv optionDivWishlist">
                  <AddToWishList id={id} showText={false} showIcon={true} />
                </div>
                <ProductTemplateFooter id={id} productDetails={productDetails} productName={productName} />
              </div>
            </div>
            <section className="productNamePrice">
              <p className="productName">{productName}</p>
              <ProductPrice priceDivClass={"center"} productPriceClass={"#FF0000"} priceClass={"productPrice"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
            </section>
          </div>
        );
      })}
    </main>
  );
};
