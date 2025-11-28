"use client";
import ProductOptions from "@/components/product-template/ProductOptions";
import { useShowPreload } from "@/hooks/useShowPreload";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiEye } from "react-icons/fi";

export default function ProductTemplateFooter({ id, productDetails, productName }: { id: number, productDetails?: { cartSize?: string, cartColor?: string }, productName: string }) {
  const { products, setView } = useNavigateContext();
  const [showViewText, setShowViewText] = useState<number | null>(null);
  const { showPreload } = useShowPreload();
  const router = useRouter();

  const navigateToView = (productName: string) => {
    setShowViewText(null);
    showPreload();
    setTimeout(() => {
      router.push({
        pathname: "",
        query: { name: productName },
      });
      setView(true);
    }, 2000);
  };

  return (
    <>
      <ProductOptions id={id} productDetails={productDetails} productName={productName} textClass={"paragraphStyles selectOption"} itemsArray={products} />
      <div className="optionDiv">
        <FiEye className="optionIcon" onClick={() => navigateToView(productName)} onMouseEnter={() => setShowViewText(id)} onMouseLeave={() => setShowViewText(null)} />
        {showViewText === id && <div className="optionText viewOptionText">Quick View</div>}
      </div>
    </>
  );
}
