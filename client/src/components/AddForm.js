import React, { useState } from 'react';
import Form from './Form';

const AddForm = () => {
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const toggleForm = (e) => {
    e.preventDefault();
    setDisplayAddForm(!displayAddForm);
  }

  return (
      <div data-testid="addForm" className={ !displayAddForm ? "add-form" : "add-form visible"}>
        {displayAddForm === false ?
          <React.Fragment>
					  <p>
              <a href="#" onClick={toggleForm} className="button add-product-button">Add A Product</a>
            </p>
          <h3>Add Product</h3>
          </React.Fragment>
        :
        <Form editing={false} toggleForm={toggleForm} />
        }
			</div>
  );
}

export default AddForm;