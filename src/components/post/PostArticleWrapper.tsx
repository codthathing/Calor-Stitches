import ArticleProvider from "@/store/providers/ArticleProvider";
import PageSection from "../layout/PageSection";
import { ReactNode } from "react";

export default function PostArticleWrapper({ children }: { children: ReactNode }) {
  return (
    <ArticleProvider>
      <PageSection>
        {children}
      </PageSection>
    </ArticleProvider>
  )
}