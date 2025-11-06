import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
import { FaTimes } from "react-icons/fa";

const AuthCancelIcon = () => {
  const { setAccount } = useContext(NavigateContext);

  return (
    <span className="cancelBtn" onClick={() => setAccount(false)}>
      <FaTimes className="cancelIcon" />
    </span>
  );
};

export default AuthCancelIcon;
