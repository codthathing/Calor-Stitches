export default function DefaultText({ textStyle, text }: { textStyle: "start" | "end" | "left" | "right" | "center"; text: string }) {
  return <p style={{ textAlign: textStyle }} className="defaultText">{text}</p>
};
