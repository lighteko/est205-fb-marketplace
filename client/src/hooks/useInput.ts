import React, { useState } from "react";

function useInput(
  initialValue: string
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValue(e.target.value);
  };

  return [value, handleChange, setValue];
}

export default useInput;
