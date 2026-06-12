"use client";
import { ChangeEventHandler, MouseEvent, useState } from "react";
import AuthPasswordInput from "@/components/auth/AuthPasswordInput";
import FormFeedback from "@/components/common/FormFeedback";
// import { useInputFocus } from "@/hooks/useInputFocus";
import AuthInput from "@/components/auth/AuthInput";
import PageButtons from "@/components/common/PageButtons";
import AuthButton from "@/components/auth/AuthButton";
import { useRouter } from "next/navigation";

export default function AuthLoginForm() {
  const [infoText, setInfoText] = useState<string>("");
  // const { inputFocus } = useInputFocus();
  const router = useRouter();

  const [loginValue, setLoginValue] = useState({ email: "", password: "" });

  const handleLoginValue: ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const handleLogin = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!loginValue.email) {
      setInfoText("Enter your email");
    } else if (!loginValue.password) {
      setInfoText("Enter your password");
    } else {
      if (loginValue.email === "akinwunmibolu@gmail.com" && loginValue.password === "Esther2003") {
        router.push("/pages/admin-page");
      } else {
        setInfoText("User cannot login");
      }
    }
  };

  return (
    <>
      <FormFeedback text={infoText} showText={Boolean(infoText)} />
      <form className="registerForm">
        <AuthInput /* refFunction={inputFocus} */ type={"text"} name={"email"} value={loginValue.email} onChange={handleLoginValue} placeholder={"Email/User"} />
        <AuthPasswordInput name={"password"} value={loginValue.password} onChange={handleLoginValue} placeholder={"Password"} />
        <div id="registerParagraph">
          <input type="checkbox" id="registerCheck" />
          <span>Remember Me</span>
          <PageButtons type={"text"} buttonFunction={() => router.replace("/auth/forgot-password")} textClass={"forgot-btn"} text={"forgot password"} />
        </div>
        <AuthButton buttonFunction={handleLogin} buttonText={"LOGIN"} />
      </form>
    </>
  );
};
