import React, { useState } from 'react';
import Form from 'react';
const AddForm = ({ formProperties }) => {
  const [formState, setFormState] = useState(false)

  const renderForm = () => {
    if (!formState) return <></>

    return (
      <Form editing={false} toggleForm={(e) => {
        e.preventDefault();
        setFormState(!formState)
      }} {...formProperties} />
    )
  }
  return (
      <div className="add-form">
					<p><a href="#" onClick={(event) => {
						event.preventDefault()
						setFormState(!formState)
					}} className="button add-product-button">Add A Product</a></p>
      	<h3>Add Product</h3>
          {renderForm()}
			</div>
  );
}
 
export default AddForm;