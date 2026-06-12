"use client";
import { ChangeEventHandler, MouseEvent, useState } from "react";
import FormFeedback from "@/components/common/FormFeedback";
// import { useInputFocus } from "@/hooks/useInputFocus";
import { useNavigateToConfirm } from "@/hooks/useNavigateToConfirm";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";

export default function AuthSignUpForm() {
  const [infoText, setInfoText] = useState<string>("");
  // const { inputFocus } = useInputFocus();
  const { setConfirm } = useNavigateToConfirm();

  const [createAccountValue, setCreateAccountValue] = useState({ username: "", email: "", password: "" });
  const handleCreateAccountValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreateAccountValue({ ...createAccountValue, [name]: value });
  };

  const handleCreateAccount = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!createAccountValue.username) {
      setInfoText("Enter username");
    } else if (!createAccountValue.email) {
      setInfoText("Enter your email");
    } else if (!createAccountValue.password) {
      setInfoText("Enter password");
    } else {
      setInfoText("Unable to send email to user");
      // setConfirm({ confirmPage: "Create account", confirmHead: "Create account confirmation OTP", confirmText: "create an account" });
    }
  };

  return (
    <>
      <FormFeedback text={infoText} showText={Boolean(infoText)} />
      <form className="registerForm">
        <AuthInput /* refFunction={inputFocus} */ type={"text"} name={"username"} value={createAccountValue.username} onChange={handleCreateAccountValue} placeholder={"User Name"} />
        <AuthInput type={"email"} name={"email"} value={createAccountValue.email} onChange={handleCreateAccountValue} placeholder={"Email"} />
        <AuthPasswordInput name={"password"} value={createAccountValue.password} onChange={handleCreateAccountValue} placeholder={"Password"} />
        <AuthButton buttonFunction={handleCreateAccount} buttonText={"REGISTER"} />
      </form>
    </>
  );
};
