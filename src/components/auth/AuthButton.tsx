import { MouseEvent } from "react";
import PageButtons from "../common/PageButtons";

export default function AuthButton({ buttonFunction, buttonText }: { buttonFunction: (e: MouseEvent<HTMLElement>) => void; buttonText: string }) {
  return <PageButtons type={"submit"} buttonType={"black-button"} buttonClass={"navBtn registerBtn"} text={buttonText} buttonFunction={buttonFunction} />;
};
