import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
import pre_load from "../../assets/pre-load.gif";

const PagePreload = () => {
  const { showPreload } = useContext(NavigateContext);

  if (showPreload) {
    return (
      <div id="pre-load-div">
        <img src={pre_load} alt="" id="pre-load-image" />
      </div>
    );
  };
};

export default PagePreload;