import AuthSection from "@/components/auth/AuthSection";
import AuthSignUpForm from "@/components/auth/AuthSignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-Up Page ",
};

export default function SignUpPage() {
  return <AuthSection headText={"Sign Up"} RegisterForm={<AuthSignUpForm />} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />;
}
