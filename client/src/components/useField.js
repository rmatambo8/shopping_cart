import { useState } from 'react';

const useField = (text) => {
    const [value, setValue] = useState(text)

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  const type = "text";
  return { value, type, onChange };
} 

export default useField;
