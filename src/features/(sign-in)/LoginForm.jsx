import { useContext, useState } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { useInputFocus } from "../../hooks/useInputFocus";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";
import AuthInput from "../../components/auth/AuthInput";
import AuthPassowrdInput from "../../components/auth/AuthPasswordInput";
import AuthButton from "../../components/auth/AuthButton";
import PageButtons from "../../components/common/PageButtons";

const LoginForm = ({ setText }) => {
  const { inputFocus } = useInputFocus();
  const navigate = useNavigateToPage();

  const { setPresentRegister } = useContext(NavigateContext);
  const [loginValue, setLoginValue] = useState({ email: "", password: "" });

  const handleLoginValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginValue.email) {
      setText("Enter your email");
    } else if (!loginValue.password) {
      setText("Enter your password");
    } else {
      if (loginValue.email === "akinwunmibolu@gmail.com" && loginValue.password === "Esther2003") {
        navigate("/pages/admin-page");
      } else {
        setText("User cannot login");
      }
    }
  };

  return (
    <form className="registerForm">
      <AuthInput refFunction={inputFocus} type={"text"} name={"email"} value={loginValue.email} onChange={handleLoginValue} placeholder={"Email/User"} />
      <AuthPassowrdInput name={"password"} value={loginValue.password} onChange={handleLoginValue} placeholder={"Password"} />
      <div id="registerParagraph">
        <input type="checkbox" id="registerCheck" />
        <span>Remember Me</span>
        <PageButtons type={"text"} buttonFunction={() => setPresentRegister("FORGOTPASSWORD")} textClass={"forgot-btn"} text={"forgot password"} />
      </div>
      <AuthButton buttonFunction={handleLogin} buttonText={"LOGIN"} />
    </form>
  );
};

export default LoginForm;
