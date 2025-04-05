import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const PageNavigationLinks = ({ pageLinks }) => {
  return (
    <ul className="productList">
      {pageLinks.map(({ id, linkDirect, linkText, linkArrow }) => {
        return (
          <li className="productListItem" key={id}>
            <Link to={linkDirect} className="productLink">
              <p className="productLinkText" style={{fontWeight: linkArrow ? "700" : "normal" }}>{linkText}</p>
              {linkArrow && <FaChevronRight className="productLinkIcon" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PageNavigationLinks;