import AuthSection from "@/components/auth/AuthSection";
import AuthSignUpForm from "@/components/auth/AuthSignUpForm";

export default function SignUpPage() {
  return <AuthSection headText={"Sign Up"} RegisterForm={<AuthSignUpForm />} nextRegister={"/auth/login"} navText={"ALREADY HAS AN ACCOUNT"} />;
}
