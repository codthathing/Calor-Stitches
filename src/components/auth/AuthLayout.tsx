import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
import LoginSection from "../features/(sign-in)/LoginSection";
import CreateAccountSection from "../features/(sign-in)/CreateAccountSection";
import ForgotPasswordSection from "../features/(sign-in)/ForgotPasswordSection";

const AuthLayout = () => {
  const { presentRegister } = useContext(NavigateContext);

  if (presentRegister === "LOGIN") {
    return <LoginSection />;
  } else if (presentRegister === "CREATEACCOUNT") {
    return <CreateAccountSection />;
  } else if (presentRegister === "FORGOTPASSWORD") {
    return <ForgotPasswordSection />;
  }
};

export default AuthLayout;
