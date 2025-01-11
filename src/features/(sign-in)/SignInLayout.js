import { useState } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import UserProfileSection from "./UserProfileSection";

const SignInLayout = () => {
  const [status, setStatus] = useState("REGISTER");

  if (status === "REGISTER") {
    return <AuthLayout />;
  } else if (status === "LOGGED_IN") {
    return <UserProfileSection />;
  }
};

export default SignInLayout;
