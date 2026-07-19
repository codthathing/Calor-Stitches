import UserWishlistLayoutWrapper from "@/components/layout/user-wishlist/UserWishlistLayoutWrapper";
import { ReactNode } from "react";

export default function UserLayout({ children }: { children: ReactNode }) {
  return <UserWishlistLayoutWrapper>{children}</UserWishlistLayoutWrapper>
}
