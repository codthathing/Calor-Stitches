import { ChangeEvent } from "react";

interface BillForm {
  formArray: { id: number, label: string, type: string, name: string, value: string, placeholder?: string, status: string }[];
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function BillForm({ formArray, handleInput }: BillForm) {
  return (
    <form className="billForm">
      {formArray.map(({ id, label, type, name, value, placeholder, status }) => {
        return (
          <div key={id} className="billLabelInputDiv">
            {label && <label className="billLabel">{label} *</label>}
            <input type={type} name={name} value={value} onChange={handleInput} placeholder={placeholder} required={status === "required"} readOnly={status === "readonly"} className="billInput" />
          </div>
        );
      })}
    </form>
  );
};
