import AuthSection from "../../auth/AuthSection";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return <AuthSection headText={"Log in"} RegisterForm={LoginForm} nextRegister={"CREATEACCOUNT"} navText={"REGISTER"} />;
}
