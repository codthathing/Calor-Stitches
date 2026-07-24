import AuthForgotpasswordForm from "@/components/auth/AuthForgotPasswordForm";
import AuthSection from "@/components/auth/AuthSection";

export default function ForgotPasswordPage() {
  return <AuthSection headText={"Forgotten Password?"} RegisterForm={<AuthForgotpasswordForm />} nextRegister={"/auth/login"} navText={"ALREADY HAS AN ACCOUNT"} />;
}
