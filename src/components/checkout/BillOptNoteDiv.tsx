export default function BillOptNoteDiv() {
  return (
    <div id="billOptTextDiv">
      <label htmlFor="billOptTextArea" id="billOptText">Order notes (optional)</label>
      <textarea id="billOptTextArea" placeholder={"Notes about your order"}></textarea>
    </div>
  );
};
