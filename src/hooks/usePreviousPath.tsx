"use client";
import { usePathname } from "next/navigation";

export const getCookie = (name: string) => {
  if (typeof document === "undefined") return undefined;
  return document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[1];
};

export const deleteCookie = (name: string) => {
  if (typeof document === "undefined") return undefined;
  document.cookie = `${name}=; Max-Age=0; path=/`;
};

export const usePreviousPath = () => {
  const pathname = usePathname();

  if (pathname.includes("/auth") || pathname.includes("/user") || pathname.includes("/product-preview")) return decodeURIComponent(getCookie("previousPath") ?? "/");

  return pathname;
};
