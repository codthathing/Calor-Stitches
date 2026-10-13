"use client";
import { ReactNode, useEffect } from "react";
import { useArticleContext } from "../../store/providers/ArticleProvider";

export default function PostsBlogsWrapper({ children, title }: { children: ReactNode; title: string }) {
  const { setPageLinks } = useArticleContext();

  useEffect(() => {
    setPageLinks([
      { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
      { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
      { id: 2, linkDirect: "", linkText: `Tag: ${title}`, linkArrow: false },
    ]);

    return () => {
      setPageLinks([]);
    }
  }, [setPageLinks, title]);

  return <>{children}</>;
}
