import { createStore, combineReducers } from "redux";
import cartReducer from '../reducers/cart';
import productReducer from '../reducers/products';

const rootReducer = combineReducers({ product: productReducer, cart: cartReducer });

const store = createStore(rootReducer);

export default store;
