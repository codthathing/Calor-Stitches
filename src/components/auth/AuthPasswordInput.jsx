import { useState } from "react";

const AuthPasswordInput = ({ name, value, onChange, placeholder }) => {
  const [viewPassword, setViewPassword] = useState(false);
  
  return (
    <div className="register-input-div register-password-div">
      <input type={viewPassword ? "text" : "password"} name={name} value={value} onChange={onChange} className="registerInput" placeholder={placeholder} required />
      <i className={`fa-solid fa-${viewPassword ? "eye-slash" : "eye"} password-view-icon`} onClick={() => setViewPassword(!viewPassword)}></i>
    </div>
  );
};

export default AuthPasswordInput;