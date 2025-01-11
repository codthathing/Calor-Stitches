import AuthSection from "../../components/auth/AuthSection";
import LoginForm from "./LoginForm";

const LoginSection = () => {
  return <AuthSection headText={"Log in"} RegisterForm={LoginForm} nextRegister={"CREATEACCOUNT"} navText={"REGISTER"} />;
};

export default LoginSection;
