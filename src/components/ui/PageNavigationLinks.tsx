import { FaChevronRight } from "react-icons/fa";
import { useNavigateToPage } from "../../hooks/useNavigateToPage"

const PageNavigationLinks = ({ pageLinks }) => {
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

export default PageNavigationLinks;