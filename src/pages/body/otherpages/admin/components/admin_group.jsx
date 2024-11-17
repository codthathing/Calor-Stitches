import { useState, useRef } from "react";

const AdminGroup = ({ addOne, addTwo, addText, style, color, textClass, adminArray, setAdminArray, defaultText, placeholder }) => {
  const [productNames, setProductNames] = useState([]);
  const [adminText, setAdminText] = useState({ text: "", color: "" });

  const HandleAdminText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminText({ ...adminText, [name]: value });
  };

  const [showAddText, setShowAddText] = useState(true);

  const HandleNewText = () => {
    if (adminText.text) {
      setAdminArray([...adminArray, { id: adminArray.length, text: adminText.text, ...(style && { style: adminArray.length === 0 }), ...(color && { color: adminText.color }) }]);
      setProductNames([...productNames, { id: Date.now(), name: adminText.text }]);
      setAdminText({ text: "", color: "" });
    };
    setShowAddText(true);
  };

  const file_upload = useRef(null);

  return (
    <div className="admin-form-div admin-group-div">
      <input ref={file_upload} type="file" hidden onChange={({ target: { files } }) => {
        if (files) {
          setProductNames([...productNames, { id: Date.now(), name: files[0].name }])
          setAdminArray([...adminArray, { id: adminArray.length, image: URL.createObjectURL(files[0]), style: adminArray.length === 0 }])
        }
      }} />
      {adminArray.length > 0 ?
        <>
          <main className="admin-group-main">
            {productNames.map(({ id, name }) => <span key={id} className="admin-group-name"><span className={`admin-group-text ${textClass}`}>{name}</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>)}
          </main>
        </> :
        <p className="admin-group-name">{defaultText}</p>
      }
      <div className="admin-add-text-div" style={{ display: showAddText ? "none" : "" }}>
        <input type="text" className="admin-add-text" name="text" value={adminText.text} onChange={HandleAdminText} placeholder={placeholder} required />
        {color && <input type="text" className="admin-add-text" name="color" value={adminText.color} onChange={HandleAdminText} placeholder="Color HEX" required />}
        <i className={`fa-solid ${adminText.text || adminText.color ? "fa-plus" : "fa-xmark"} admin-group-add`} onClick={HandleNewText}></i>
      </div>
      {(addOne && adminArray.length < 1) && <i onClick={() => file_upload.current.click()} className="fa-solid fa-plus admin-group-add"></i>}
      {addTwo && <i onClick={() => file_upload.current.click()} className="fa-solid fa-plus admin-group-add"></i>}
      {addText && <i onClick={() => setShowAddText(false)} className="fa-solid fa-plus admin-group-add"></i>}
    </div>
  );
};

export default AdminGroup;