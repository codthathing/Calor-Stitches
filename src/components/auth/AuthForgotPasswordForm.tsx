"use client";
import { ChangeEventHandler, MouseEvent, useState } from "react";
import FormFeedback from "@/components/common/FormFeedback";
// import { useNavigateToConfirm } from "@/hooks/useNavigateToConfirm";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput";
import AuthInput from "@/components/auth/AuthInput";
import AuthButton from "@/components/auth/AuthButton";

export default function AuthForgotpasswordForm() {
  const [infoText, setInfoText] = useState<string>("");
  // const { setConfirm } = useNavigateToConfirm();

  const [forgotPasswordValue, setForgotPasswordValue] = useState({ email: "", new_password: "", confirm_password: "" });
  const handleForgotPasswordValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setForgotPasswordValue({ ...forgotPasswordValue, [name]: value });
  };

  const handleForgotPassword = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!forgotPasswordValue.email) {
      setInfoText("Enter your email/username");
    } else if (!forgotPasswordValue.new_password) {
      setInfoText("Enter new password");
    } else if (!forgotPasswordValue.confirm_password) {
      setInfoText("Confirm password");
    } else if (forgotPasswordValue.new_password !== forgotPasswordValue.confirm_password) {
      setInfoText("Password not matching");
    } else {
      setInfoText("Unable to send email to user");
      // setConfirm({ confirmPage: "New password", confirmHead: "New password confirmation OTP", confirmText: "change your password" });
    }
  };

  return (
    <>
      <FormFeedback text={infoText} showText={Boolean(infoText)} />
      <form className="registerForm">
        <AuthInput autoFocus={true} type={"text"} name={"email"} value={forgotPasswordValue.email} onChange={handleForgotPasswordValue} placeholder={"Username or Email Address"} />
        <AuthPasswordInput name={"new_password"} value={forgotPasswordValue.new_password} onChange={handleForgotPasswordValue} placeholder={"New Password"} />
        <AuthPasswordInput name={"confirm_password"} value={forgotPasswordValue.confirm_password} onChange={handleForgotPasswordValue} placeholder={"Confirm Password"} />
        <AuthButton buttonFunction={handleForgotPassword} buttonText={"SET NEW PASSWORD"} />
      </form>
    </>
  );
};
