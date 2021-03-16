import React, { useState } from 'react';
import Form from './Form';
const AddForm = ({ formProperties }) => {
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const toggleForm = (e) => {
    e.preventDefault();
    setDisplayAddForm(!displayAddForm);
  }

  return (
      <div className={ !displayAddForm ? "add-form" : "add-form visible"}>
        {displayAddForm === false ?
          <React.Fragment>
					  <p>
              <a href="#" onClick={toggleForm} className="button add-product-button">Add A Product</a>
            </p>
          <h3>Add Product</h3>
          </React.Fragment>
        :
        <Form editing={false} toggleForm={toggleForm} {...formProperties} />
        }
			</div>
  );
}

export default AddForm;