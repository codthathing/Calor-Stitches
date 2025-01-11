import { Link } from "react-router-dom";

const PageNavigationLinks = ({ pageLinks }) => {
  return (
    <ul className="productList">
      {pageLinks.map(({ id, linkDirect, linkText, linkArrow }) => {
        return (
          <li className="productListItem" key={id}>
            <Link to={linkDirect} className="productLink">
              <p className="productLinkText" style={{fontWeight: linkArrow ? "700" : "normal" }}>{linkText}</p>
              {linkArrow && <i className="fa-solid fa-chevron-right productLinkIcon"></i>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PageNavigationLinks;