import AuthSection from "../../auth/AuthSection";
import CreateAccountForm from "./SignUpForm";

export default function CreateAccountPage() {
  return <AuthSection headText={"Sign Up"} RegisterForm={CreateAccountForm} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />;
}
