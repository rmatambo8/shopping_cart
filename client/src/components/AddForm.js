import React, { useState } from 'react';
import Form from './Form';
const AddForm = ({ formProperties }) => {
  const [formState, setFormState] = useState(false)
  const toggleForm = (e) => {
    e.preventDefault();
    setFormState(!formState)
  }
  const renderForm = () => {
    if (!formState) return <div></div>

    return (
      <Form editing={false} toggleForm={toggleForm} {...formProperties} />
    )
  }
  return (
      <div className="add-form">
					<p onClick={toggleForm} ><a href="#" onClick={toggleForm} className="button add-product-button">Add A Product</a></p>
      	<h3>Add Product</h3>
          {renderForm()}
			</div>
  );
}
 
export default AddForm;