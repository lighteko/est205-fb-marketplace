import React, { ReactNode } from "react";

export default function Padding({ children }: { children: ReactNode }): JSX.Element {
  return <div className="padding">{children}</div>;
}
