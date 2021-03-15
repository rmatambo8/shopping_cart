import React, { useEffect, useState } from "react";
import Header from './Header';
import Products from './Products';
import useField from './useField';
import data from "../lib/data";
import AddForm from './AddForm';
// import Form from './Form'

const App = () => {
	const [ cart, setCart ] = useState([]);
	const [products, setProducts] = useState([]);
	const [formState, setFormState] = useState(false);
	const addItemToCart = (item) => {
		setCart(cart.concat(item));
	}

	useEffect(() => {
		setProducts(data)
	}, [])
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
	const addNewProduct = (event) => {
		const item = { title: title.value, price: price.value, quantity: quantity.value }
		setProducts(product.concat(item));
	}

	const props = { title, price, quantity, handleForm: addNewProduct }
	return (
		<div id="app">
			<Header cart={cart}/>
			<main> 
				<Products 
					productList={products} 
					addItem={addItemToCart} 
					removeItem={removeItemFromCart} 
				/>
				<AddForm formProperties={props}/>
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

