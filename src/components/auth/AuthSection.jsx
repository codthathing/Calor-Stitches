import { useState } from "react";
import AuthCancelIcon from "./AuthCancelIcon";
import AuthHeadText from "./AuthHeadText";
import FormFeedback from "../common/FormFeedback";
import AuthNavigateText from "./AuthNavigateText";

const AuthSection = ({ headText, RegisterForm, nextRegister, navText }) => {
  const [infoText, setInfoText] = useState("");

  return (
    <>
      <AuthCancelIcon />
      <div className="registerDiv">
        <AuthHeadText headText={headText} />
        <FormFeedback text={infoText} showText={infoText} />
        <RegisterForm setText={setInfoText} />
        <AuthNavigateText nextRegister={nextRegister} navText={navText} />
      </div>
    </>
  );
};

export default AuthSection;
