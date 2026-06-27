import PageSection from "@/components/layout/PageSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import WishlistHandle from "@/components/wishlist/WishlistHandle";
import WishlistProductSection from "@/components/wishlist/WishlistProductSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist Page"
}

export default async function WishlistPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "CS wishlist", linkArrow: false },
  ]

  return (
    <PageSection>
      <PageNavigationLinks pageLinks={pageLinkDetails} />
      <main className="productWishlistCartMain">
        <WishlistProductSection />
        <WishlistHandle className={"desktop-center"} />
      </main>
    </PageSection>
  );
}