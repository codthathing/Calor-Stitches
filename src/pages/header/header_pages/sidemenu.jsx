import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidemenu = () => {

  const [currentSideMenu, setCurrentSideMenu] = useState([
    { id: 0, menuText: "home", link: "/", path: false, borderStyle: { borderBottom: "" } },
    { id: 1, menuText: "shop", link: "", path: "/shop", borderStyle: { borderBottom: "" } },
    { id: 2, menuText: "products", link: "", path: "/product", borderStyle: { borderBottom: "" } },
    { id: 3, menuText: "pages", link: "", path: "/page", borderStyle: { borderBottom: "" } },
    { id: 4, menuText: "blog", link: "", path: "/blog", borderStyle: { borderBottom: "" } },
    // { id: 5, menuText: "features", link: "", path: "/feature", borderStyle: { borderBottom: "" } },
  ])

  const pathLink = window.location.pathname;
  useEffect(() => {
    const presentPath = currentSideMenu.map((path) => {
      if (!path.path && pathLink === "/") {
        return { ...path, borderStyle: { borderBottom: "1px solid #222222" } };
      } else if (pathLink.includes(path.path)) {
        return { ...path, borderStyle: { borderBottom: "1px solid #222222" } }
      } else {
        return path;
      }
    });
    setCurrentSideMenu(presentPath);
  }, [pathLink]);

  return (
    <aside id="sideMenuAside">
      <div id="sidemenuList">
        {currentSideMenu.map(({ id, link, menuText, borderStyle }) => {
          return (
            <Link key={id} to={link} className="sideMenuItem" style={borderStyle}>
              <p className="sideMenuText">{menuText}</p>
              <i className="fa-solid fa-chevron-down sideMenuIcon"></i>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidemenu;