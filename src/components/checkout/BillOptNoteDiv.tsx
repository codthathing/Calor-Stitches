import { useState } from "react";

const BillOptNoteDiv = () => {
  const [ textArea, setTextArea ] = useState("");

  return (
    <div id="billOptTextDiv">
      <label htmlFor="billOptTextArea" id="billOptText">Order notes (optional)</label>
      <textarea id="billOptTextArea" value={textArea} onChange={(e) => setTextArea(e.target.value)} placeholder={"Notes about your order"}></textarea>
    </div>
  );
};

export default BillOptNoteDiv;