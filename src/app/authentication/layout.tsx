import AuthCancelIcon from "@/components/auth/AuthCancelIcon";
import AuthPagesLayout from "@/components/auth/AuthPagesLayout";
import { ReactNode } from "react";

export default function AuthLayout({ login, sign_up, forgot_password, user_profile }: { children: ReactNode; login: ReactNode; sign_up: ReactNode; forgot_password: ReactNode; user_profile: ReactNode }) {
  return (
    <section className="navSections">
      <main className="mainRegister mainNav">
        <AuthCancelIcon />
        <AuthPagesLayout user_profile={user_profile} login={login} sign_up={sign_up} forgot_password={forgot_password} />
      </main>
    </section>
  );
}
