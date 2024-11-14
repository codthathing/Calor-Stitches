import { ToggleRegister } from "../contextpage";
import pre_load from "../../asset/images-icons/pre_load/pre-load.gif";
import { useContext } from "react";

const PreLoad = () => {
  const { showPreload } = useContext(ToggleRegister);

  if (showPreload) {
    return (
      <div id="pre-load-div">
        <img src={pre_load} alt="" id="pre-load-image" />
      </div>
    );
  };
};

export default PreLoad;