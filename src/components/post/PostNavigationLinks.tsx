"use client";
import { useArticleContext } from "@/store/providers/ArticleProvider";
import PageNavigationLinks from "../ui/PageNavigationLinks";

export default function PostNavigationLinks() {
  const { pageLinks } = useArticleContext();

  return <PageNavigationLinks pageLinks={pageLinks} />;
}
