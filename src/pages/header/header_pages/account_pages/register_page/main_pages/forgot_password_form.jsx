import { useState, useContext } from "react";
import { useFocus } from "../usefocus";
import RegisterInput from "../register_input";
import RegisterPassword from "../register_password";
import RegisterButton from "../register_button";
import { useConfirm } from "../register_confirm";

const ForgotpasswordForm = ({ setText }) => {

  const { inputFocus } = useFocus();
  const { setConfirm } = useConfirm();

  const [forgotPasswordValue, setForgotPasswordValue] = useState({ email: "", new_password: "", confirm_password: "" });
  const ChangeForgotPasswordValue = (e) => {
    const {name, value} = e.target;
    setForgotPasswordValue({ ...forgotPasswordValue, [name]: value });
  };

  const HandleForgotPassword = (e) => {
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
    };
  };


  return (
    <form className="registerForm">
      <RegisterInput refFunction={inputFocus} type={"text"} name={"email"} value={forgotPasswordValue.email} onChange={ChangeForgotPasswordValue} placeholder={"Username or Email Address"} />
      <RegisterPassword name={"new_password"} value={forgotPasswordValue.new_password} onChange={ChangeForgotPasswordValue} placeholder={"New Password"} />
      <RegisterPassword name={"confirm_password"} value={forgotPasswordValue.confirm_password} onChange={ChangeForgotPasswordValue} placeholder={"Confirm Password"} />
      <RegisterButton buttonFunction={HandleForgotPassword} buttonText={"SET NEW PASSWORD"} />
    </form>
  );
};

export default ForgotpasswordForm;