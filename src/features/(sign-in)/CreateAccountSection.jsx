import AuthSection from "../../components/auth/AuthSection";
import CreateAccountForm from "./CreateAccountForm";

const CreateAccountSection = () => {
  return <AuthSection headText={"Create Account"} RegisterForm={CreateAccountForm} nextRegister={"LOGIN"} navText={"ALREADY HAS AN ACCOUNT"} />;
};

export default CreateAccountSection;
