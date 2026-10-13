import { GeneralProductType } from "@/types/productType";
import { mockProducts } from "../data/mockProducts";

export async function getProducts(): Promise<GeneralProductType[]> {
  return mockProducts;
}