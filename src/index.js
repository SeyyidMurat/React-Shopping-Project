import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductContextProvider from "./context/products-context"
import CartContextProvider from "./context/cart-context"
import "./css/style.css"
ReactDOM.render(
    <ProductContextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </ProductContextProvider>
    ,
    document.getElementById('root')
);


