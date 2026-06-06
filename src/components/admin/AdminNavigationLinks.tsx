"use client";
import { useState } from "react";
import TabNavigations from "../common/TabNavigations";
import { useAdminContext } from "@/store/providers/AdminProvider";

export default function AdminNavigationLinks() {
  const [adminNavigationArray, setAdminNavigationArray] = useState([
    { id: 0, text: "PRODUCTS", style: true },
    { id: 1, text: "BLOGS", style: false },
  ]);

  const { adminNavigation, setAdminNavigation } = useAdminContext()

  return <TabNavigations array={adminNavigationArray} setArray={setAdminNavigationArray} tab={adminNavigation} setTab={setAdminNavigation} />;
}
