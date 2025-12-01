"use client";
import { MouseEvent } from "react";

interface PageButtons {
  type: string;
  buttonType?: string;
  buttonClass?: string;
  text: string;
  buttonFunction?: (() => void) | ((e: MouseEvent<HTMLElement>) => void);
  textClass?: string;
}

export default function PageButtons({ type, buttonType, buttonClass, text, buttonFunction, textClass }: PageButtons) {
  return (
    <>
      {(type === "button" || type === "submit") && (
        <button onClick={buttonFunction} type={type} className={`${buttonClass} ${buttonType === "black-button" ? "page-black-button" : "page-white-button"} page-button`}>
          <span className={`${buttonType === "black-button" ? "button-black-text" : "button-white-text"} page-button-text`}>{text}</span>
        </button>
      )}
      {type === "text" && (
        <span onClick={buttonFunction} className={`${textClass} page-animate-text button-white-text page-button-text`}>
          {text}
        </span>
      )}
    </>
  );
}
