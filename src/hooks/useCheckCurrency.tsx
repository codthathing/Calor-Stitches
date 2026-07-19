"use client";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "@/lib/utils/convertCurrency";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useEffect } from "react";
import { GeneralProductType } from "@/types/productType";

export const useCheckCurrency = () => {
  const { presentCurrency, setCurDetails, setProducts, setCollection, setPresentFilterProducts, setCurSymbol, setProductShipValue, defaultCurrency, setDefaultCurrency } = useNavigateContext();

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: "/assets/currency-flags/nigeria-flag.png", curName: "Naira ₦" });

      setProducts((prev) => changeCurrencyToDollar<GeneralProductType>(prev));
      setCollection((prev) => changeCurrencyToDollar<GeneralProductType>(prev));
      setPresentFilterProducts((prev) => changeCurrencyToDollar<GeneralProductType>(prev));

      setProductShipValue((prev) => ({ shipFee: prev.shipFee / 1000, min: prev.min / 1000, max: prev.max / 1000, minValue: prev.minValue / 1000, maxValue: prev.maxValue / 1000 }));

      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: "/assets/currency-flags/america-flag.png", curName: "USD $" });

      if (defaultCurrency) {
        setProducts((prev) => changeCurrencyToNaira<GeneralProductType>(prev));
        setCollection((prev) => changeCurrencyToNaira<GeneralProductType>(prev));
        setPresentFilterProducts((prev) => changeCurrencyToNaira<GeneralProductType>(prev));

        setProductShipValue((prev) => ({ shipFee: prev.shipFee * 1000, min: prev.min * 1000, max: prev.max * 1000, minValue: prev.minValue * 1000, maxValue: prev.maxValue * 1000 }));
      }
      setCurSymbol("₦");
    }

    return () => setDefaultCurrency(false);
  }, [presentCurrency, defaultCurrency, setCollection, setCurDetails, setCurSymbol, setDefaultCurrency, setPresentFilterProducts, setProductShipValue, setProducts]);
};
