import AuthSection from "../../components/auth/AuthSection";
import ForgotpasswordForm from "./ForgotPasswordForm";

const ForgotPasswordSection = () => {
  return <AuthSection headText={"Forgotten Password?"} RegisterForm={ForgotpasswordForm} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />;
};

export default ForgotPasswordSection;
