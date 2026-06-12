"use client";
import { useRouter } from "next/navigation";
import PageButtons from "../common/PageButtons";

export default function AuthNavigateText({ nextRegister, navText }: { nextRegister: "/auth/sign-up" | "/auth/login" | "/auth/forgot-password"; navText: string }) {
  const router = useRouter();

  return (
    <div className="register-nav-div">
      <PageButtons type={"text"} buttonFunction={() => router.replace(nextRegister)} text={navText} />
    </div>
  );
};
