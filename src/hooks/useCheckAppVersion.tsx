"use client";
import { useEffect } from "react";

export function useCheckAppVersion() {
  useEffect(() => {
    const CURRENT_VERSION = "1.0.1";

    const APP_VERSION = localStorage.getItem("APP_VERSION");
    if (APP_VERSION !== CURRENT_VERSION) {
      localStorage.removeItem("wishlistItems");
      localStorage.removeItem("cartItems");
      localStorage.setItem("APP_VERSION", CURRENT_VERSION);
    }
  }, []);
}
