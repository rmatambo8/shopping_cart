import { useState } from 'react';

const useField = (text) => {
    const [value, setValue] = useState(text)

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  }
<<<<<<< HEAD
  const type = "text"
  return { value, type, onChange };
} 

export default useField;
=======

  return {value, setValue, onChange};
} 

export default useField;
>>>>>>> 40937a12ee6de26e8d8a60817d61aacce4dacda7
