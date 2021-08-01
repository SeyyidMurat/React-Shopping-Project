import React from 'react'
import { GoX, GoPlusSmall, GoDash } from "react-icons/go"
import IconBtn from "../Elements/IconBtn"
const CartItem = ({ product, decrease, increase, removeProduct }) => {
    return (
        <>
            <div className="cart__item">
                <img src={product.img} alt={product.alt} className="cart__img" />
                <div className="cart__desc">
                    <h4 className="cart__product-title">{product.title}</h4>
                    <span className="cart__price">{`${product.price} TL`}</span>
                    <span className="cart__quantity">
                        <IconBtn className="cart__quantity-btn"><GoPlusSmall onClick={() => increase(product)} /></IconBtn>
                        <IconBtn className="cart__quantity-btn"><GoDash onClick={() => decrease(product)} /></IconBtn>
                        <span className="cart__quantity-text">{product.quantity} adet</span>
                    </span>
                    <IconBtn className="cart__delete-btn"><GoX onClick={() => removeProduct(product)} /></IconBtn>
                </div>
            </div>
        </>
    )
}

export default CartItem
