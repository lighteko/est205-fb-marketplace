import React from "react";

export default function Icon({
  src,
  alt,
  padding = true,
  autoSize = false,
}: {
  src: string;
  alt: string;
  padding?: boolean;
  autoSize?: boolean;
}): JSX.Element {
  const size = autoSize ? {} : { height: "1em", width: "1em" };
  return (
    <div
      style={
        padding
          ? {
              margin: "0.25em",
              ...size,
              display: "flex",
              justifyContent: "center",
            }
          : {
              ...size,
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
