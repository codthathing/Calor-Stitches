import { useNavigateContext } from "@/store/providers/NavigateProvider";
import PageButtons from "../common/PageButtons";

export default function AuthNavigateText({ nextRegister, navText }: { nextRegister: "LOGIN" | "SIGNUP" | "FORGOTPASSWORD"; navText: string }) {
  const { setPresentAuthView } = useNavigateContext();

  return (
    <div className="register-nav-div">
      <PageButtons type={"text"} buttonFunction={() => setPresentAuthView(nextRegister)} text={navText} />
    </div>
  );
};
