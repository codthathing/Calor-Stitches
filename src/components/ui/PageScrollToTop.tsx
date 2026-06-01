import { scrollToSection } from "@/lib/utils/scrollToSection";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

export default function PageScrollToTop({ showIcon }: { showIcon: boolean }) {
  const { home_section } = useNavigateContext();

  return (
    <AnimatePresence>
      {showIcon && (
        <motion.div id="page-top-div" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ type: "tween", duration: 0.35, ease: "linear" }} onClick={() => scrollToSection(home_section)}>
          <FaArrowUp className="page-top-icon" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
