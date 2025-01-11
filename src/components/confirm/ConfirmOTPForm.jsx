import { useState, useRef, useEffect } from "react";
import PageButtons from "../common/PageButtons";

const ConfirmOTPForm = () => {
  const [confirmInput, setConfirmInput] = useState(Array(6).fill("")); 
  const confirmRefs = useRef([]);

  const handleConfirmInput = (e, index) => {
    const value = e.target.value;
    const newConfirmInput = [...confirmInput];
    newConfirmInput[index] = value;
    setConfirmInput(newConfirmInput);

    if (value && index < confirmInput.length - 1) {
      confirmRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !confirmInput[index] && index > 0) {
      confirmRefs.current[index - 1].focus();
    }
  };

  const handleConfirmInputSubmit = (e) => {
    e.preventDefault();
    const confirmCode = Number(confirmInput.join(""));
  };

  useEffect(() => {
    confirmRefs.current[0].focus();
  }, []);

  return (
    <form onSubmit={handleConfirmInputSubmit} id="confirm-code-form">
      <div id="confirm-inner-div">
        {confirmInput.map((value, index) => (
          <input
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleConfirmInput(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (confirmRefs.current[index] = el)}
            className="confirm-code-input"
            maxLength={1}
          />
        ))}
      </div>
      <PageButtons type={"submit"} buttonType={"black-button"} buttonClass={"confirm-button"} text={"confirm"} />
    </form>
  );
};

export default ConfirmOTPForm;