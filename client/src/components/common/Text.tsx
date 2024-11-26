import React from "react";

export default function Text({
  content,
  fontSize,
  fontWeight,
  color = "black",
  style,
}: {
  content: string;
  fontSize: number;
  fontWeight: string;
  color?: string;
  style?: React.CSSProperties;
}): JSX.Element {
  return (
    <div
      style={{
        fontSize: `${fontSize}em`,
        fontWeight,
        lineHeight: `${fontSize}em`,
        height: `${fontSize}em`,
        color,
        ...style,
      }}
    >
      {content}
    </div>
  );
}
