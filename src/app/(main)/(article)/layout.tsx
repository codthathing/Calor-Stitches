import PostArticleWrapper from "@/components/post/PostArticleWrapper";
import PostNavigationLinks from "@/components/post/PostNavigationLinks";
import PostOtherSection from "@/components/post/PostOtherSection";
import { ReactNode } from "react";

export default function ArticleLayout({ children }: { children: ReactNode }) {

  return (
    <PostArticleWrapper>
      <PostNavigationLinks />
      <main className="post-main">
        {children}
        <PostOtherSection />
      </main>
    </PostArticleWrapper>
  );
}
