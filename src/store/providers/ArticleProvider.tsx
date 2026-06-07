"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface ArticleContext {
  pageLinks: { id: number; linkDirect: string; linkText: string; linkArrow: boolean }[];
  setPageLinks: Dispatch<SetStateAction<{ id: number; linkDirect: string; linkText: string; linkArrow: boolean }[]>>;
}

const ArticleContext = createContext<ArticleContext | null>(null);

export default function ArticleProvider({ children }: { children: ReactNode }) {
  const [pageLinks, setPageLinks] = useState<{ id: number; linkDirect: string; linkText: string; linkArrow: boolean }[]>([]);

  return <ArticleContext.Provider value={{ pageLinks, setPageLinks }}>{children}</ArticleContext.Provider>
}

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (!context) throw new Error("Make sure this component exists in the ArticleProvider tree");

  return context;
}