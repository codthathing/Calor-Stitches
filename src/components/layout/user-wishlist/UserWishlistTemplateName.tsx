"use client";
import { useRouter } from "next/navigation";

export default function UserWishlistTemplateName({ productName }: { productName: string }) {
  const router = useRouter();

  return (
    <h1 className="wishListName wishListTexts" onClick={() => router.replace(`/product-preview?name=${encodeURIComponent(productName)}`)}>{productName}</h1>
  );
}
