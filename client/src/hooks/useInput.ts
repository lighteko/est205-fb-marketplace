import React, { useState } from "react";

function useInput(
  initialValue: string
): [
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] {
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValue(e.target.value);
  };

  return [value, handleChange];
}

export default useInput;
