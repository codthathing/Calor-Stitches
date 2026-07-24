"use client";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, MouseEvent } from "react";

const MODAL_SEGMENTS = ["/auth", "/user", "/product-preview"];

type PageModalLinkProps = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export default function PageModalLink({ href, children, onClick, ...props }: PageModalLinkProps) {
  const hrefString = typeof href === "string" ? href : href.pathname?.toString() ?? "";

  const isModalRoute = MODAL_SEGMENTS.some((segment) => hrefString.startsWith(segment));

  return (
    <Link {...props} href={href} onClick={(e: MouseEvent<HTMLAnchorElement>) => {
      if (isModalRoute) document.cookie = "navigatedInternally=true; path=/";

      onClick?.(e);
    }}>{children}</Link>
  );
}