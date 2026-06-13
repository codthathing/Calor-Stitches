"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import Image from "next/image";

export default function PagePreload() {
  const { preload } = useNavigateContext();

  if (preload) {
    return (
      <div id="pre-load-div">
        <Image src={"/assets/pre-load.gif"} alt="Loading Icon" unoptimized width={100} height={100} id="pre-load-image" />
      </div>
    );
  };
};
