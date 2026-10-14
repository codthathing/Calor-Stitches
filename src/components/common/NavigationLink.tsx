import Link from "next/link";
import { ReactNode } from "react";

export default function NavigationLink({href, className, children}: {href: string; className?: string; children: ReactNode}) {
  return <Link href={href} prefetch={false} style={{textDecoration: "none"}} className={className}>{children}</Link>
}