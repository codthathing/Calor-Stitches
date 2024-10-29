const BillForm = ({ formArray, HandleInput }) => {
  return (
    <form className="billForm">
      {formArray.map(({ id, label, type, name, value, placeholder, status }) => {
        if (status === "required") {
          return (
            <div key={id} className="billLabelInputDiv">
              {label && <label className="billLabel">{label} *</label>}
              <input type={type} name={name} value={value} onChange={HandleInput} placeholder={placeholder} required className="billInput" />
            </div>
          );
        } else if (status === "readonly") {
          return (
            <div key={id} className="billLabelInputDiv">
              {label && <label className="billLabel">{label} *</label>}
              <input type={type} name={name} value={value} onChange={HandleInput} readOnly className="billInput" />
            </div>
          );
        }
      })}
    </form>
  );
};

export default BillForm;