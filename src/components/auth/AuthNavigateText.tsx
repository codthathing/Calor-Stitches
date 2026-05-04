"use client";
import PageButtons from "../common/PageButtons";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";

export default function AuthNavigateText({ nextRegister, navText }: { nextRegister: "/auth/sign-up" | "/auth/login" | "/auth/forgot-password"; navText: string }) {
  const navigate = useNavigateToPage();

  return (
    <div className="register-nav-div">
      <PageButtons type={"text"} buttonFunction={() => navigate(nextRegister)} text={navText} />
    </div>
  );
};
