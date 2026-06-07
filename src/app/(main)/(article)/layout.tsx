import PostArticleWrapper from "@/components/post/PostArticleWrapper";
import PostNavigationLinks from "@/components/post/PostNavigationLinks";
import PostOtherSection from "@/components/post/PostOtherSection";
import PageNavigationLinks from "@/components/ui/PageNavigationLinks";
import { ReactNode } from "react";

export default function ArticleLayout({ children }: { children: ReactNode }) {
  // const pageLinkDetails = [
  //   { id: 0, linkDirect: "/", linkText: "home", linkArrow: true },
  //   { id: 1, linkDirect: "", linkText: "blog standard", linkArrow: true },
  //   { id: 2, linkDirect: "", linkText: "post_title", linkArrow: false }
  // ]

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
