import AdminFeaturesLayout from "@/components/admin/AdminFeaturesLayout";
import AdminNavigationLinks from "@/components/admin/AdminNavigationLinks";
import PageSection from "@/components/layout/PageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import AdminProvider from "@/store/providers/AdminProvider";
import { Metadata } from "next";

const pageLinkDetails = [
  { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
  { id: 1, linkDirect: "", linkText: "page", linkArrow: true },
  { id: 2, linkDirect: "", linkText: "admin page", linkArrow: false },
];

export const metadata: Metadata = {
  title: "Admin Page",
};

export default function layout() {
  return (
    <AdminProvider>
      <PageSection>
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main id="admin-main">
          <AdminNavigationLinks />
          <AdminFeaturesLayout />
        </main>
      </PageSection>
    </AdminProvider>
  );
}
