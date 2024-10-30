const BillForm = ({ formArray, HandleInput }) => {
  return (
    <form className="billForm">
      {formArray.map(({ id, label, type, name, value, placeholder, status }) => {
        return (
          <div key={id} className="billLabelInputDiv">
            {label && <label className="billLabel">{label} *</label>}
            <input type={type} name={name} value={value} onChange={HandleInput} placeholder={placeholder} required={status === "required"} readOnly={status === "readonly"} className="billInput" />
          </div>
        );
      })}
    </form>
  );
};

export default BillForm;