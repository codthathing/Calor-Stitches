import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const HeaderSideMenu = () => {
  const [currentSideMenu, setCurrentSideMenu] = useState([
    { id: 0, menuText: "home", link: "/", path: false, borderStyle: { borderBottom: "" } },
    { id: 1, menuText: "shop", path: "/shop", borderStyle: { borderBottom: "" } },
    { id: 2, menuText: "products", path: "/product", borderStyle: { borderBottom: "" } },
    { id: 3, menuText: "pages", path: "/page", borderStyle: { borderBottom: "" } },
    { id: 4, menuText: "blog", path: "/blog", borderStyle: { borderBottom: "" } },
  ]);

  const location = useLocation().pathname;
  useEffect(() => {
    setCurrentSideMenu((prevState) =>
      prevState.map((path) => {
        if (!path.path && location === "/") {
          return { ...path, borderStyle: { borderBottom: "1px solid #222222" } };
        } else if (location.includes(path.path)) {
          return { ...path, borderStyle: { borderBottom: "1px solid #222222" } };
        } else {
          return path;
        }
      })
    );
  }, [location]);

  return (
    <motion.aside initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.35, type: "tween", ease: "linear" }} id="sidemenuList">
      <div id="side-menu-div">
        {currentSideMenu.map(({ id, link, menuText, borderStyle }) => {
          return (
            <Link key={id} {...(link && { to: link })} className="sideMenuItem" style={borderStyle}>
              <p className="sideMenuText">{menuText}</p>
              <FaChevronDown className="sideMenuIcon" />
            </Link>
          );
        })}
      </div>
    </motion.aside>
  );
};

export default HeaderSideMenu;
