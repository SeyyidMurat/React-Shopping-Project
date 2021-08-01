import React, { useContext, useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import { ProductsContext } from "../../context/products-context"
import { CartContext } from "../../context/cart-context"
import { withRouter } from "react-router-dom"
const SingleProduct = ({ match, history: { push } }) => {

    const { products } = useContext(ProductsContext);
    const { addProduct } = useContext(CartContext)
    const { id } = match.params;
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id))

        if (!product) {
            alert("Ürün Bulunamadı..")
            return push("/")
        }

        setProduct(product)
    }, [id, products, push])

    if (!product) { return null }

    const { img, title, description, price } = product
    return (
        <Layout>
            <div className="single__product">
                <div className="single__product-wrapper">
                    <div className="single__product-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="single__product-desc">
                        <h2>{title}.</h2>
                        <p>{description}</p>
                        <h4><span>Ürün Fiyatı:</span> {price} TL</h4>
                        <div className="single__product-btns">
                            <button className="btn btn-outline" onClick={() => addProduct(product)}>
                                Ürün Ekle
                            </button>
                            <button className="btn btn-contained" onClick={() => push("/")}>
                                Anasayfa Dön
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(SingleProduct)

