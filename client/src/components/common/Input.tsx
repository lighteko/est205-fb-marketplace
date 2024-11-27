import React from "react";
import { InputType } from "../../constants/enums";
import "./Input.css";

export default function Input({
  type,
  placeholder,
  onChange,
  onKeyDown,
  value,
  name,
  style,
}: {
  type: InputType;
  placeholder: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
  name: string;
  style?: React.CSSProperties;
}) {
  switch (type) {
    case InputType.TEXTAREA:
      return (
        <>
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            style={style}
            onKeyDown={onKeyDown}
          />
        </>
      );
    case InputType.INPUT:
      return (
        <>
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            name={name}
            style={style}
          />
        </>
      );
    default:
      return <></>;
  }
}
