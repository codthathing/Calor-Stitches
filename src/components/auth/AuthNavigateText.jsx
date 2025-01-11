import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import PageButtons from "../common/PageButtons";

const AuthNavigateText = ({ nextRegister, navText }) => {
  const { setPresentRegister } = useContext(NavigateContext);

  return (
    <div className="register-nav-div">
      <PageButtons type={"text"} buttonFunction={() => setPresentRegister(nextRegister)} text={navText} />
    </div>
  );
};

export default AuthNavigateText;
