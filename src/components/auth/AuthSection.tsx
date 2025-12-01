import { ReactNode } from "react";
import AuthHeadText from "./AuthHeadText";
import AuthNavigateText from "./AuthNavigateText";

interface AuthSection {
  headText: string;
  RegisterForm: ReactNode;
  nextRegister: "LOGIN" | "SIGNUP" | "FORGOTPASSWORD";
  navText: string;
}

export default function AuthSection({ headText, RegisterForm, nextRegister, navText }: AuthSection) {
  return (
    <>
      <AuthHeadText headText={headText} />
      {RegisterForm}
      <AuthNavigateText nextRegister={nextRegister} navText={navText} />
    </>
  );
}
