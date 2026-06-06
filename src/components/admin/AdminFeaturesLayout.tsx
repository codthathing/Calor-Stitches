"use client";
import { useAdminContext } from "@/store/providers/AdminProvider";
import AdminBlogSection from "./AdminBlogSection";
import AdminProductSection from "./AdminProductSection";

export default function AdminFeaturesLayout() {
  const getCurrentNavigationSection = (tab: string) => {
    switch (tab) {
      case "PRODUCTS":
        return <AdminProductSection />;
      case "BLOGS":
        return <AdminBlogSection />;
    }
  };

  const { adminNavigation } = useAdminContext();

  return <>{getCurrentNavigationSection(adminNavigation)}</>;
}
