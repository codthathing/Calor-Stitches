"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useRouter } from "next/router";

export default function UserWishlistTemplateName({ productName }: { productName: string }) {
  const { setWishList, setView } = useNavigateContext();
  const router = useRouter();

  const navigateToView = (productName: string) => {
    router.push({ pathname: "", query: { name: productName } });
    setWishList(false);
    setView(true);
  };

  return (
    <h1 className="wishListName wishListTexts" onClick={() => navigateToView(productName)}>
      {productName}
    </h1>
  );
}
