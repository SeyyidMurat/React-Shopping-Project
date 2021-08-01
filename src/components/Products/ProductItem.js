import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom"
import { CartContext } from "../../context/cart-context"
import { isInCart } from "../../helper"

const ProductItem = ({ product, history }) => {

    const { addProduct, cartItems, increase } = useContext(CartContext)

    return (
        <div className="products__item slipt">
            <img src={product.img} alt={product.alt} className="products__img" />
            <div className="products__desc">
                <h4>{product.title}</h4>
                <span className="products__price">{`${product.price} TL`}</span>
            </div>
            <div className="products__btns">
                {
                    !isInCart(product, cartItems) &&
                    <button className="btn btn-outline products__btn" onClick={() => addProduct(product)}>
                        Ürün Ekle
                    </button>
                }
                {
                    isInCart(product, cartItems) &&
                    <button className="btn btn-outline products__btn" onClick={() => increase(product)}>
                        +1
                    </button>
                }

                <Link className="btn btn-contained products__btn" onClick={() => history.push(`/product/${product.id}`)}>Ürün Detayı</Link>
            </div>
        </div >
    )
}

export default withRouter(ProductItem)
