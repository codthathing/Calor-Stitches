import AuthSection from "../../auth/AuthSection";
import ForgotpasswordForm from "./ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return <AuthSection headText={"Forgotten Password?"} RegisterForm={ForgotpasswordForm} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />;
}
