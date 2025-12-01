import AuthForgotpasswordForm from "@/components/auth/AuthForgotPasswordForm";
import AuthSection from "@/components/auth/AuthSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password Page ",
};

export default function ForgotPasswordPage() {
  return <AuthSection headText={"Forgotten Password?"} RegisterForm={<AuthForgotpasswordForm />} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />;
}
