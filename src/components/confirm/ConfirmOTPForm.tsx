"use client";
import { ChangeEvent, KeyboardEvent, FormEvent, useEffect, useRef, useState } from "react";
import PageButtons from "../common/PageButtons";

export default function ConfirmOTPForm() {
  const [confirmInput, setConfirmInput] = useState<string[]>(Array(6).fill(""));
  const confirmRefs = useRef<HTMLInputElement[]>([]);

  const handleConfirmInput = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newConfirmInput = [...confirmInput];
      newConfirmInput[index] = value;
      setConfirmInput(newConfirmInput);

      if (value && index < confirmInput.length - 1) {
        confirmRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!confirmInput[index] && index > 0) {
        confirmRefs.current[index - 1].focus();
      } else {
        const newConfirmInput = [...confirmInput];
        newConfirmInput[index] = "";
        setConfirmInput(newConfirmInput);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      confirmRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      confirmRefs.current[index + 1]?.focus();
    }
  };

  const handleConfirmInputSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirmCode = confirmInput.join("");

    if (confirmCode.length < 6) {
      return;
    }

    // const confirmCodeNumber = Number(confirmCode);
  };

  useEffect(() => {
    confirmRefs.current[0]?.focus();
  }, []);

  return (
    <form onSubmit={handleConfirmInputSubmit} id="confirm-code-form">
      <div id="confirm-inner-div">
        {confirmInput.map((value, index) => (
          <input
            key={index}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmInput(e, index)}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
            ref={(el) => {
              if (el) confirmRefs.current[index] = el;
            }}
            className="confirm-code-input"
            maxLength={1}
            autoComplete="off"
          />
        ))}
      </div>
      <PageButtons type={"submit"} buttonType={"black-button"} buttonClass={"confirm-button"} text={"confirm"} />
    </form>
  );
}