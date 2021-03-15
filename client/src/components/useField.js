import { useState } from 'react';

const useField = (name) => {
    const [value, setValue] = useState(name)

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  }

  return {value, setValue, onChange}
} 

export default useField