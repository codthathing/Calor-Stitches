import { ReactNode } from "react";
import AuthHeadText from "./AuthHeadText";
import AuthNavigateText from "./AuthNavigateText";

interface AuthSection {
  headText: string;
  RegisterForm: ReactNode;
  nextRegister: "/auth/sign-up" | "/auth/login" | "/auth/forgot-password";
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
