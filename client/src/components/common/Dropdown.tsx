import React, { useState, useEffect, useRef } from "react";
import { Option } from "../../types/option";
import "./Dropdown.css";

export default function Dropdown({
  title,
  options,
  value,
  onSelect,
  style,
}: {
  title: string;
  options: Option[];
  value: any;
  onSelect: (option: Option) => void;
  style?: React.CSSProperties;
}) {
  const [viewOptions, setViewOptions] = useState("none");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setViewOptions("none");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="dropdown-component" ref={dropdownRef} style={style}>
      <>
        <button
          className="dropdown"
          onClick={() => {
            setViewOptions("flex");
          }}
        >
          {value.optionContent}
          <svg
            fill="currentColor"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 13.125a.624.624 0 0 1-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 0 1-.442.183Z"></path>
          </svg>
        </button>
      </>

      <section className="dropdown-options" style={{ display: viewOptions }}>
        <span id="title">{title}</span>
        {options.map((option) => {
          const { optionID, optionValue, optionContent } = option;
          return (
            <button
              key={optionID}
              onClick={() => {
                onSelect(option);
                setViewOptions("none");
              }}
              className="option"
              style={
                value === optionValue ? { backgroundColor: "#d9d9d9" } : {}
              }
            >
              {optionContent}
            </button>
          );
        })}
      </section>
    </section>
  );
}
