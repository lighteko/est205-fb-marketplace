import React, { CSSProperties } from "react";
import Icon from "./Icon";

export default function IconButton({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: () => void;
}): JSX.Element {
  const iconBtnStyle: CSSProperties = {
    margin: "0.25em",
  };

  return (
    <div style={iconBtnStyle} onClick={onClick}>
      <Icon src={src} alt={alt} />
    </div>
  );
}
