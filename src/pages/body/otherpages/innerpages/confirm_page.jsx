import { useEffect, useContext, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../pagelinks";

const ConfirmPage = () => {
  const { setAccount, setPresentRegister } = useContext(ToggleRegister);

  const [searchParams] = useSearchParams();
  const [pageLink, pageHead, pageText] = [searchParams.get("link"), searchParams.get("head"), searchParams.get("text")];

  useEffect(() => {
    if (pageLink === "New password") {
      setAccount(false);
      setPresentRegister("LOGIN");
    }
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Page", linkArrow: true },
    { id: 2, linkDirect: "", linkText: pageLink, linkArrow: false },
  ];







  const [code, setCode] = useState(Array(6).fill("")); // Assuming a 6-digit code
  const inputRefs = useRef([]);

  const [ confirmInput, setConfirmInput ] = useState(Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input
    if (value && index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmationCode = code.join("");
    console.log("Confirmation Code:", typeof(confirmationCode)); // Do something with the code
  };

  useEffect(() => {
    // Automatically focus the first input on mount
    inputRefs.current[0].focus();
  }, []);










  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="confirm-main">
        <p id="confirm-head">{pageHead}</p>
        <p id="confirm-text">Hey {"John"},<br /> Thank you for choosing <span className="confirm-span">Calor Stiches</span>. Use the following OTP to complete the procedure to {pageText}. OTP is valid for only <span className="confirm-span">5 minutes</span>. Do not share this code with anyone.</p>
        <form onSubmit={handleSubmit} id="confirm-code-form">
          <div id="confirm-inner-div">
            {code.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="confirm-code-input"
                maxLength={1} // Limit input to one character
              />
            ))}
          </div>
          {/* <div id="confirm-inner-div">
            {confirmInput.map((value, index) => (
              <input
                key={index}
                type="text"
                value={value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="confirm-code-input"
                maxLength={1} // Limit input to one character
              />
            ))}
          </div> */}
          <button type="submit" id="confirm-button">Confirm</button>
        </form>
      </main>
    </div>
  );
};

export default ConfirmPage;