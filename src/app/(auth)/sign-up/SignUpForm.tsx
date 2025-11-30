import { useState } from "react";
import { useInputFocus } from "../../../hooks/useInputFocus";
import AuthInput from "../../auth/AuthInput";
import AuthPassowrdInput from "../../auth/AuthPasswordInput";
import AuthButton from "../../auth/AuthButton";
import { useNavigateToConfirm } from "../../../hooks/useNavigateToConfirm";

const CreateAccountForm = ({ setText }) => {
  const { inputFocus } = useInputFocus();
  const { setConfirm } = useNavigateToConfirm();

  const [createAccountValue, setCreateAccountValue] = useState({ username: "", email: "", password: "" });
  const handleCreateAccountValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreateAccountValue({ ...createAccountValue, [name]: value });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!createAccountValue.username) {
      setText("Enter username");
    } else if (!createAccountValue.email) {
      setText("Enter your email");
    } else if (!createAccountValue.password) {
      setText("Enter password");
    } else {
      setText("Unable to send email to user");
      // setConfirm({ confirmPage: "Create account", confirmHead: "Create account confirmation OTP", confirmText: "create an account" });
    }
  };

  return (
    <form className="registerForm">
      <AuthInput refFunction={inputFocus} type={"text"} name={"username"} value={createAccountValue.username} onChange={handleCreateAccountValue} placeholder={"User Name"} />
      <AuthInput type={"email"} name={"email"} value={createAccountValue.email} onChange={handleCreateAccountValue} placeholder={"Email"} />
      <AuthPassowrdInput name={"password"} value={createAccountValue.password} onChange={handleCreateAccountValue} placeholder={"Password"} />
      <AuthButton buttonFunction={handleCreateAccount} buttonText={"REGISTER"} />
    </form>
  );
};

export default CreateAccountForm;
