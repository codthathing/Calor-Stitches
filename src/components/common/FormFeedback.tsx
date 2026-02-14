export default function FormFeedback({ text, showText }: { text: string; showText: boolean }) {
  if(showText) {
    return <p id="register-message">{text}</p>
  }
};
