import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowBack } from "react-icons/md";
import IconBtn from "../Elements/IconBtn"
import Layout from '../Layout/Layout';
import CartItem from './CartItem';
import { CartContext } from "../../context/cart-context"
const Cart = () => {
    const { cartItems, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext)
    const funcs = { increase, decrease, removeProduct }
    const EmptyCart = () => {

        return <p className="cart__empty">Sepetiniz Boş</p>
    }

    const FullCart = ({ cartItems }) => {
        return (
            <div className="cart__wrapper">
                {
                    cartItems.map((product) => (
                        <CartItem product={product} key={product.id} {...funcs} />
                    ))
                }
                <button className="btn btn-contained" onClick={() => clearCart()}>Sepeti Temizle</button>
            </div>
        )
    }

    return (
        <Layout>
            <section className="cart">
                <h2 className="cart__title">Alışveriş Sepetiniz</h2>
                {
                    cartItems.length === 0
                        ? <EmptyCart />
                        : <FullCart cartItems={cartItems} />

                }
                <div className="cart__footer">
                    <Link className="btn cart__back-btn" to="/">
                        <IconBtn><MdArrowBack /></IconBtn>
                        Anasayfa Geri Dön
                    </Link>
                    <p className="cart__footer-total"><span>Toplam: </span> {total} TL</p>
                </div>

            </section>
        </Layout >
    )
}

export default Cart


