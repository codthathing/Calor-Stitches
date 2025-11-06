import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
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
