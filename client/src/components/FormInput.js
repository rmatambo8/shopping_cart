import React from 'react';

const FormInput = ({ name, type, id }) => {
  return (
    <div className="input-group">
      <label for={id}>Product Name</label>
      <input type={type} id={id} />
    </div>
  )
}

export default FormInput;