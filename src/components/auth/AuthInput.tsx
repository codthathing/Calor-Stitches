import { ChangeEventHandler, RefObject } from "react";

interface AuthInput {
  refFunction?: RefObject<HTMLInputElement | null>;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

export default function AuthInput({ refFunction, type, name, value, onChange, placeholder }: AuthInput) {
  return (
    <div className="register-input-div">
      <input /* ref={refFunction} */ type={type} name={name} value={value} onChange={onChange} className="registerInput" placeholder={placeholder} required />
    </div>
  );
};
