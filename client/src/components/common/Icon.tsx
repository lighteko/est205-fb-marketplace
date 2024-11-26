import React from "react";

export default function Icon({
  src,
  alt,
  padding = true,
  autoSize = false,
  size = 1,
}: {
  src: string;
  alt: string;
  padding?: boolean;
  autoSize?: boolean;
  size?: number;
}): JSX.Element {
  const sizes = autoSize ? {} : { height: `${size}em`, width: `${size}em` };
  return (
    <div
      style={
        padding
          ? {
              margin: "0.25em",
              ...sizes,
              display: "flex",
              justifyContent: "center",
            }
          : {
              ...sizes,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }
      }
    >
      <img src={src} alt={alt} />
    </div>
  );
}
