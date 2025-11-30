import { useState } from "react";
import { useInputFocus } from "../../../hooks/useInputFocus";
import AuthInput from "../../auth/AuthInput";
import AuthPassowrdInput from "../../auth/AuthPasswordInput";
import AuthButton from "../../auth/AuthButton";
import { useNavigateToConfirm } from "../../../hooks/useNavigateToConfirm";

const ForgotpasswordForm = ({ setText }) => {
  const { inputFocus } = useInputFocus();
  const { setConfirm } = useNavigateToConfirm();

  const [forgotPasswordValue, setForgotPasswordValue] = useState({ email: "", new_password: "", confirm_password: "" });
  const handleForgotPasswordValue = (e) => {
    const { name, value } = e.target;
    setForgotPasswordValue({ ...forgotPasswordValue, [name]: value });
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!forgotPasswordValue.email) {
      setText("Enter your email/username");
    } else if (!forgotPasswordValue.new_password) {
      setText("Enter new password");
    } else if (!forgotPasswordValue.confirm_password) {
      setText("Confirm password");
    } else if (forgotPasswordValue.new_password !== forgotPasswordValue.confirm_password) {
      setText("Password not matching");
    } else {
      setText("Unable to send email to user");
      // setConfirm({ confirmPage: "New password", confirmHead: "New password confirmation OTP", confirmText: "change your password" });
    }
  };

  return (
    <form className="registerForm">
      <AuthInput refFunction={inputFocus} type={"text"} name={"email"} value={forgotPasswordValue.email} onChange={handleForgotPasswordValue} placeholder={"Username or Email Address"} />
      <AuthPassowrdInput name={"new_password"} value={forgotPasswordValue.new_password} onChange={handleForgotPasswordValue} placeholder={"New Password"} />
      <AuthPassowrdInput name={"confirm_password"} value={forgotPasswordValue.confirm_password} onChange={handleForgotPasswordValue} placeholder={"Confirm Password"} />
      <AuthButton buttonFunction={handleForgotPassword} buttonText={"SET NEW PASSWORD"} />
    </form>
  );
};

export default ForgotpasswordForm;
