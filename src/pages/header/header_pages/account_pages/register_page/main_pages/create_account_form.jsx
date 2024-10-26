import { useState } from "react";
import { useFocus } from "../usefocus";
import RegisterInput from "../register_input";
import RegisterPassword from "../register_password";
import RegisterButton from "../register_button";
import { useConfirm } from "../register_confirm";

const CreateAccountForm = ({ setText }) => {
  const { inputFocus } = useFocus();
  const { setConfirm } = useConfirm();

  const [createAccountValue, setCreateAccountValue] = useState({ username: "", email: "", password: "" });
  const ChangeCreateAccountValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreateAccountValue({ ...createAccountValue, [name]: value });
  };

  const HandleCreateAccount = (e) => {
    e.preventDefault();
    if (!createAccountValue.username) {
      setText("Enter username");
    } else if (!createAccountValue.email) {
      setText("Enter your email");
    } else if(!createAccountValue.password) {
      setText("Enter password");
    } else {
      setText("Unable to send email to user");
      // setConfirm({ confirmPage: "Create account", confirmHead: "Create account confirmation OTP", confirmText: "create an account" });
    };
  };

  return (
    <form className="registerForm">
      <RegisterInput refFunction={inputFocus} type={"text"} name={"username"} value={createAccountValue.username} onChange={ChangeCreateAccountValue} placeholder={"User Name"} />
      <RegisterInput type={"email"} name={"email"} value={createAccountValue.email} onChange={ChangeCreateAccountValue} placeholder={"Email"} />
      <RegisterPassword name={"password"} value={createAccountValue.password} onChange={ChangeCreateAccountValue} placeholder={"Password"} />
      <RegisterButton buttonFunction={HandleCreateAccount} buttonText={"REGISTER"} />
    </form>
  );
};

export default CreateAccountForm;