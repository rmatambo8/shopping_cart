import React, { useState } from "react";
import Header from './Header';
import Products from './Products';
import AddProductForm from './AddProductForm';
import data from "../lib/data";

const App = () => {
	const [ cart, setCart ] = useState([]);

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

	return (
		<div id="app">
			<Header cart={cart}/>
			<main> 
				<Products 
					productList={data} 
					addItem={addItemToCart} 
					removeItem={removeItemFromCart} 
			  />
				<AddProductForm />
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

