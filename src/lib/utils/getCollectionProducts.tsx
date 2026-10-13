import { GeneralProductType } from "@/types/productType";
import { getProducts } from "./getProducts";

export async function getCollectionProducts(category: string): Promise<GeneralProductType[]> {
  const products = await getProducts();

  return products.filter(({ productInfo }) => productInfo?.find(({ name }) => name === "CARTEGORIES")?.links.find(({ text }) => text === category));
}