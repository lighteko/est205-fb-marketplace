import React from "react";

export default function Text({
  content,
  fontSize,
  fontWeight,
  color = "black",
}: {
  content: string;
  fontSize: number;
  fontWeight: string;
  color?: string;
}): JSX.Element {
  return (
    <div
      style={{
        fontSize: `${fontSize}em`,
        fontWeight,
        lineHeight: `${fontSize}em`,
        height: `${fontSize}em`,
        color,
      }}
    >
      {content}
    </div>
  );
}
