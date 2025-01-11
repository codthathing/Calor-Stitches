import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";

const AuthCancelIcon = () => {
  const { setAccount } = useContext(NavigateContext);

  return (
    <span className="cancelBtn" onClick={() => setAccount(false)}>
      <i className="fa-solid fa-xmark cancelIcon"></i>
    </span>
  );
};

export default AuthCancelIcon;
