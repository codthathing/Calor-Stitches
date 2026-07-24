"use client";
import ProductOptions from "@/components/product-template/ProductOptions";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useState } from "react";
import { FiEye } from "react-icons/fi";

export default function ProductTemplateFooter({ id, productDetails, productName }: { id: number; productDetails?: { cartSize?: string; cartColor?: string }; productName: string }) {
  const { products, navigateToPage } = useNavigateContext();
  const [showViewText, setShowViewText] = useState<boolean>(false);

  return (
    <>
      <ProductOptions id={id} productDetails={productDetails} productName={productName} textClass={"paragraphStyles selectOption"} itemsArray={products} />
      <div className="optionDiv">
        <FiEye className="optionIcon" onClick={() => {
            document.cookie = "navigatedInternally=true; path=/";
            navigateToPage(`/product-preview?name=${encodeURIComponent(productName)}`)}
          } onMouseEnter={() => setShowViewText(true)} onMouseLeave={() => setShowViewText(false)} />
        {showViewText && <div className="optionText viewOptionText">Quick View</div>}
      </div>
    </>
  );
}
