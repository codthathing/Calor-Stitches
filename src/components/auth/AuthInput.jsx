const AuthInput = ({ refFunction, type, name, value, onChange, placeholder }) => {
  return (
    <div className="register-input-div">
      <input ref={refFunction} type={type} name={name} value={value} onChange={onChange} className="registerInput" placeholder={placeholder} required />
    </div>
  );
};

export default AuthInput;