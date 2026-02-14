"use client";
import { useState, useRef, Dispatch, SetStateAction, ChangeEvent } from "react";
import { FaPlus, FaXmark } from "react-icons/fa6";

type AdminGroupType = {
  addOne?: boolean;
  addTwo?: boolean;
  addText?: boolean;
  style?: boolean;
  color?: boolean;
  textClass?: string;
  adminArray: { id: number; text?: string; image?: string; color?: string; style?: boolean }[];
  setAdminArray: Dispatch<SetStateAction<{ id: number; text?: string; image?: string; color?: string; style?: boolean }[]>>;
  defaultText: string;
  placeholder?: string;
};

export default function AdminGroupInput({ addOne, addTwo, addText, style, color, textClass, adminArray, setAdminArray, defaultText, placeholder }: AdminGroupType) {
  const [productNames, setProductNames] = useState<{ id: number; name: string }[]>([]);
  const [adminText, setAdminText] = useState<{ text: string; color: string }>({ text: "", color: "" });

  const handleAdminText = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminText({ ...adminText, [name]: value });
  };

  const [showAddText, setShowAddText] = useState<boolean>(true);

  const handleNewText = () => {
    if (adminText.text) {
      const id = Date.now();
      setAdminArray([...adminArray, { id: id, text: adminText.text, ...(style && { style: adminArray.length === 0 }), ...(color && { color: adminText.color }) }]);
      setProductNames([...productNames, { id: id, name: adminText.text }]);
      setAdminText({ text: "", color: "" });
    }
    setShowAddText(true);
  };

  const file_upload = useRef<HTMLInputElement | null>(null);

  const deleteText = (id: number) => {
    setProductNames((prevState) => prevState.filter((item) => item.id !== id));
    setAdminArray((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <div className="admin-form-div admin-group-div">
      <input
        ref={file_upload}
        type="file"
        hidden
        onChange={({ target: { files } }) => {
          if (files) {
            const id: number = Date.now();
            setProductNames([...productNames, { id: id, name: files[0].name }]);
            setAdminArray([...adminArray, { id: id, image: URL.createObjectURL(files[0]), style: adminArray.length === 0 }]);
          }
        }}
      />
      {adminArray.length > 0 ? (
        <main className="admin-group-main">
          {productNames.map(({ id, name }) => (
            <span key={id} className="admin-group-name">
              <span className={`admin-group-text ${textClass}`}>{name}</span>
              <i onClick={() => deleteText(id)} className="fa-solid fa-xmark admin-group-remove"></i>
            </span>
          ))}
        </main>
      ) : (
        <p className="admin-group-name">{defaultText}</p>
      )}
      <div className="admin-add-text-div" style={{ display: showAddText ? "none" : "flex" }}>
        <input type="text" className="admin-add-text" name="text" value={adminText.text} onChange={handleAdminText} placeholder={placeholder} required />
        {color && <input type="text" className="admin-add-text" name="color" value={adminText.color} onChange={handleAdminText} placeholder="Color HEX" required />}
        <span onClick={handleNewText} className="admin-add-span">
          {adminText.text || adminText.color ? <FaPlus className="admin-group-add" /> : <FaXmark className="admin-group-add" />}
        </span>
      </div>
      {addOne && adminArray.length < 1 && <FaPlus onClick={() => file_upload.current && file_upload.current.click()} className="admin-group-add" />}
      {addTwo && <FaPlus onClick={() => file_upload.current && file_upload.current.click()} className="admin-group-add" />}
      {addText && <FaPlus onClick={() => setShowAddText(false)} className="admin-group-add" />}
    </div>
  );
}
