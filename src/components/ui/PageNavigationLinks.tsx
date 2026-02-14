"use client";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";
import { FaChevronRight } from "react-icons/fa";

export default function PageNavigationLinks({ pageLinks }: { pageLinks: { id: number; linkDirect: string; linkText: string; linkArrow: boolean }[] }) {
  const navigate = useNavigateToPage();

  return (
    <ul className="productList">
      {pageLinks.map(({ id, linkDirect, linkText, linkArrow }) => {
        return (
          <li className="productListItem" onClick={(e) => { linkDirect ? navigate(linkDirect) : e.preventDefault() }} style={{cursor: linkArrow ? "pointer" : "" }} key={id}>
            <p className="productLinkText" style={{fontWeight: linkArrow ? "700" : "normal" }}>{linkText}</p>
            {linkArrow && <FaChevronRight className="productLinkIcon" />}
          </li>
        );
      })}
    </ul>
  );
}
