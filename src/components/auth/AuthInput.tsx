import { ChangeEventHandler } from "react";

interface AuthInput {
  autoFocus?: boolean;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export default function AuthInput({ autoFocus = false, type, name, value, onChange, placeholder }: AuthInput) {
  return (
    <div className="register-input-div">
      <input autoFocus={autoFocus} type={type} name={name} value={value} onChange={onChange} className="registerInput" placeholder={placeholder} required />
    </div>
  );
};
