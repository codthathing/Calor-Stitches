import AuthLoginForm from "@/components/auth/AuthLoginForm";
import AuthSection from "@/components/auth/AuthSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page ",
};

export default function LoginPage() {
  return <AuthSection headText={"Log in"} RegisterForm={<AuthLoginForm />} nextRegister={"/auth/sign-up"} navText={"REGISTER"} />;
}
