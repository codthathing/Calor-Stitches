"use client";
import { useArticleContext } from "@/store/providers/ArticleProvider";
import PageNavigationLinks from "../ui/PageNavigationLinks";
import PageNavigationLinksLoading from "../ui/PageNavigationLinksLoading";
import { usePathname } from "next/navigation";

export default function PostNavigationLinks() {
  const { pageLinks } = useArticleContext();
  const pathname = usePathname();

  if (!pageLinks || pageLinks.length === 0) return <PageNavigationLinksLoading length={pathname.includes("/blog") ? 4 : 3} />;

  return <PageNavigationLinks pageLinks={pageLinks} />;
}
