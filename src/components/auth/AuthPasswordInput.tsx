"use client";
import { ChangeEventHandler, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface AuthPasswordInput {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export default function AuthPasswordInput({ name, value, onChange, placeholder }: AuthPasswordInput) {
  const [viewPassword, setViewPassword] = useState(false);
  
  return (
    <div className="register-input-div register-password-div">
      <input type={viewPassword ? "text" : "password"} name={name} value={value} onChange={onChange} className="registerInput" placeholder={placeholder} required />
      <span onClick={() => setViewPassword(!viewPassword)}>{ viewPassword ? <FaEyeSlash className="password-view-icon" /> : <FaEye className="password-view-icon" />}</span>
    </div>
  );
};
