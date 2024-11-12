import React from "react";

export default function Icon({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): JSX.Element {
  return (
    <div style={{ margin: "0.25em" }}>
      <img src={src} alt={alt} />
    </div>
  );
}
