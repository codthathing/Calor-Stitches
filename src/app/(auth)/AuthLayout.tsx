import { useState } from "react";
import AuthLayout from "../../auth/AuthLayout";
import UserProfileSection from "./@user-profile/page";

const SignInLayout = () => {
  const [status, setStatus] = useState("REGISTER");

  return (
    <section className="navSections">
      <main className="mainRegister mainNav">
        {status === "REGISTER" ? <AuthLayout /> : <UserProfileSection />}
      </main>
    </section>
  );
};

export default SignInLayout;
