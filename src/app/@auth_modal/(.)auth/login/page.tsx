import AuthLoginForm from "@/components/auth/AuthLoginForm";
import AuthSection from "@/components/auth/AuthSection";

export default function LoginPage() {
  return <AuthSection headText={"Log in"} RegisterForm={<AuthLoginForm />} nextRegister={"/auth/sign-up"} navText={"REGISTER"} />;
}
