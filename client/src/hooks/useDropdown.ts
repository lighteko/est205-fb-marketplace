import { useState } from "react";
import { Option } from "../types/option";

export default function useDropdown(initialValue: Option) {
  const [value, setValue] = useState(initialValue);
  const onSelect = (option: Option) => {
    setValue(option);
  }
  return [value as Option, onSelect as (option: Option) => void];
}
