import React, { useState } from "react";
import Header from './Header';
import Products from './Products';
import useField from './useField';
import data from "../lib/data";

import Form from './Form'

const App = () => {
	const [ cart, setCart ] = useState([]);
	const [products, setProducts] = useState(data);
	const [formState, setFormState] = useState(false);
	const addItemToCart = (item) => {
		setCart(cart.concat(item));
	}

	const removeItemFromCart = (id) => {
		setCart(
			cart.filter(item => {
				return item.id !== id;
			})
	  );
	}

	const product = {title: "", price: "", quantity: ""}

	const title = useField(product.title);
  const price = useField(product.price);
	const quantity = useField(product.quantity);
	const handleForm = (event) => {
		const item = { title: title.value, price: price.value, quantity: quantity.value }
		setProducts(product.concat(item));
	}

	return (
		<div id="app">
			<Header cart={cart}/>
			<main> 
				<Products 
					productList={products} 
					addItem={addItemToCart} 
					removeItem={removeItemFromCart} 
				/>
			<div className="add-form">
					<p><a onClick={() => setFormState(true)}className="button add-product-button">Add A Product</a></p>
      	<h3>Add Product</h3>
					{formState && <Form editing={false} toggleForm={(e) => {
						e.preventDefault();
						setFormState(!formState)
					}} {...{ title, price, quantity, handleForm }} />}
			</div>
			</main>
		</div>
	);
};

export default App;

/*
CART:
Header section: page title, cart, total, checkout (button)
Products section: 
	- individual products(product name, price, quantity in stock, add to cart button, edit button, "X" button), 
	- add product button

*/

