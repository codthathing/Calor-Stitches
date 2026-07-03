"use client";
import { useState, useEffect, memo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { usePathname, useRouter } from "next/navigation";

const HeaderSideMenu = () => {
  const { toggleSideMenu } = useNavigateContext();
  const [currentSideMenu, setCurrentSideMenu] = useState<{ id: number; menuText: string; link?: string; path: false | string; borderStyle: { borderBottom: string } }[]>([
    { id: 0, menuText: "home", link: "/", path: false, borderStyle: { borderBottom: "" } },
    { id: 1, menuText: "shop", path: "/shop", borderStyle: { borderBottom: "" } },
    { id: 2, menuText: "products", path: "/product", borderStyle: { borderBottom: "" } },
    { id: 3, menuText: "pages", path: "/page", borderStyle: { borderBottom: "" } },
    { id: 4, menuText: "blog", path: "/blog", borderStyle: { borderBottom: "" } },
  ]);

  const router = useRouter();
  const location = usePathname();

  useEffect(() => {
    setCurrentSideMenu((prevState) =>
      prevState.map((path) => {
        if (!path.path && location === "/") {
          return { ...path, borderStyle: { borderBottom: "1px solid #222222" } };
        } else if (path.path && location.includes(path.path)) {
          return { ...path, borderStyle: { borderBottom: "1px solid #222222" } };
        }

        return path;
      })
    );
  }, [location]);

  return (
    <AnimatePresence>
      {toggleSideMenu && (
        <motion.aside initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.35, type: "tween", ease: "linear" }} id="sidemenuList">
          <div id="side-menu-div">
            {currentSideMenu.map(({ id, link, menuText, borderStyle }) => {
              return (
                <span key={`${id}`} onClick={(e) => { 
                  if (link) {
                    router.push(link);
                    router.refresh();
                  } else {
                    e.preventDefault() ;
                  }
                }} className="sideMenuItem" style={borderStyle}>
                  <p className="sideMenuText">{menuText}</p>
                  <FaChevronDown className="sideMenuIcon" />
                </span>
              );
            })}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default memo(HeaderSideMenu);
