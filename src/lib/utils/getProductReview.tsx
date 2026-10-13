import { GeneralProductType } from "@/types/productType";
import { getProducts } from "./getProducts";

export async function getProductReview(title: string): Promise<{product: GeneralProductType; relatedProducts: GeneralProductType[]}> {
  const products = await getProducts();

  const presentProduct = products.find((product) => product.productName === title) as GeneralProductType;
  
  const presentProductCategory = presentProduct.productInfo?.find(({ name }) => name === "CARTEGORIES")?.links.map(({ text }) => text);
  const relatedProducts = products.filter(({ productInfo, productName }) => productName !== presentProduct.productName && productInfo?.find(({ name }) => name === "CARTEGORIES")?.links.some(({ text }) => presentProductCategory?.includes(text))) as GeneralProductType[];

  return {product: presentProduct, relatedProducts};
}