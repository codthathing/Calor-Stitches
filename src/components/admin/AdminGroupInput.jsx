import { useState, useRef } from "react";
import { FaPlus, FaXmark } from "react-icons/fa6";

const AdminGroupInput = ({ addOne, addTwo, addText, style, color, textClass, adminArray, setAdminArray, defaultText, placeholder }) => {
  const [productNames, setProductNames] = useState([]);
  const [adminText, setAdminText] = useState({ text: "", color: "" });

  const handleAdminText = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminText({ ...adminText, [name]: value });
  };

  const [showAddText, setShowAddText] = useState(true);

  const handleNewText = () => {
    if (adminText.text) {
      const _id = Date.now();
      setAdminArray([...adminArray, { id: _id, text: adminText.text, ...(style && { style: adminArray.length === 0 }), ...(color && { color: adminText.color }) }]);
      setProductNames([...productNames, { id: _id, name: adminText.text }]);
      setAdminText({ text: "", color: "" });
    };
    setShowAddText(true);
  };

  const file_upload = useRef(null);

  const deleteText = (id) => {
    setProductNames(prevState => prevState.filter((item) => item.id !== id));
    setAdminArray(prevState => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-form-div admin-group-div">
      <input ref={file_upload} type="file" hidden onChange={({ target: { files } }) => {
        if (files) {
          const _id = Date.now();
          setProductNames([...productNames, { id: _id, name: files[0].name }]);
          setAdminArray([...adminArray, { id: _id, image: URL.createObjectURL(files[0]), style: adminArray.length === 0 }]);
        };
      }} />
      {adminArray.length > 0 ? <main className="admin-group-main">
        {productNames.map(({ id, name }) => <span key={id} className="admin-group-name"><span className={`admin-group-text ${textClass}`}>{name}</span><i onClick={() => deleteText(id)} className="fa-solid fa-xmark admin-group-remove"></i></span>)}
      </main> :
      <p className="admin-group-name">{defaultText}</p>}
      <div className="admin-add-text-div" style={{ display: showAddText ? "none" : "flex" }}>
        <input type="text" className="admin-add-text" name="text" value={adminText.text} onChange={handleAdminText} placeholder={placeholder} required />
        {color && <input type="text" className="admin-add-text" name="color" value={adminText.color} onChange={handleAdminText} placeholder="Color HEX" required />}
        <span onClick={handleNewText} className="admin-add-span">{(adminText.text || adminText.color) ? <FaPlus className="admin-group-add" /> : <FaXmark className="admin-group-add" />}</span>
      </div>
      {(addOne && adminArray.length < 1) && <FaPlus onClick={() => file_upload.current.click()} className="admin-group-add" />}
      {addTwo && <FaPlus onClick={() => file_upload.current.click()} className="admin-group-add" />}
      {addText && <FaPlus onClick={() => setShowAddText(false)} className="admin-group-add" />}
    </div>
  );
};

export default AdminGroupInput;