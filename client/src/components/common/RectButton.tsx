import { Colors } from "../../constants/styles";

export default function RectButton({
  text,
  onClick,
  className,
  style,
  size,
}: {
  text: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
  size: number;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: Colors.primaryColor,
        margin: "0.5em",
        height: size / 2.5 + "em",
        width: size / 1.25 + "em",
        borderRadius: size / 15 + "em",
        color: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: size / 2.5 + "em",
        border: "none",
        ...style,
      }}
    >
      {text}
    </button>
  );
}
