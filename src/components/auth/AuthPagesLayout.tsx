"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { ReactNode } from "react";

export default function AuthPagesLayout({ user_profile, login, sign_up, forgot_password }: { user_profile: ReactNode; login: ReactNode; sign_up: ReactNode; forgot_password: ReactNode }) {
  const isLoggedIn = false;
  const { presentAuthView } = useNavigateContext();

  const renderAuthView = () => {
    if (isLoggedIn) return user_profile;

    switch (presentAuthView) {
      case "LOGIN":
        return login;
      case "SIGNUP":
        return sign_up;
      case "FORGOTPASSWORD":
        return forgot_password;
    }
  };

  return <div className="registerDiv">{renderAuthView()}</div>;
}
