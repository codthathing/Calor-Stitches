import AdminNavigationLinks from "@/components/admin/AdminNavigationLinks";
import AdminPageSection from "@/components/admin/AdminPageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import { Metadata } from "next";
import { ReactNode } from "react";

const pageLinkDetails = [
  { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
  { id: 1, linkDirect: "", linkText: "page", linkArrow: true },
  { id: 2, linkDirect: "", linkText: "admin page", linkArrow: false },
];

const linksArray = [
  { id: 0, text: "PRODUCTS", path: "/admin/product" },
  { id: 1, text: "POSTS", path: "/admin/blog" },
];

export const metadata: Metadata = {
  title: "Admin Page"
}

export default function layout({ sections }: { children: ReactNode; sections: ReactNode }) {
  return (
    <AdminPageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main id="admin-main">
        <AdminNavigationLinks array={linksArray} />
        {sections}
      </main>
    </AdminPageSection>
  );
}
