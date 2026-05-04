"use client";
import ProductStockAlert from "@/components/product-template/ProductStockAlert";
import { useRouter } from "next/navigation";

export default function ProductStockAlertWrapper({ productName, productAvailable, wishlistStock, cutOff }: { productName: string; productAvailable?: string, wishlistStock: number, cutOff?: number }) {
  const router = useRouter();

  return (
    <section onClick={() => router.push(`/review/${productName}`)} className="orderOptions">
      <ProductStockAlert productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
    </section>
  );
}
