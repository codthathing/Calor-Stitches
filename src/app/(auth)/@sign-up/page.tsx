import AuthSection from "../../auth/AuthSection";
import SignUpForm from "./SignUpForm";

export default function SignUpPage() {
  return <AuthSection headText={"Sign Up"} RegisterForm={SignUpForm} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />;
}
