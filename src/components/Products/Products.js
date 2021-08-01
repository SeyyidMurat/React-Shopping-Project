import React from 'react'
import { useContext } from 'react'
import { ProductsContext } from "../../context/products-context"
import ProductItem from './ProductItem'
const Products = () => {

    const { products } = useContext(ProductsContext)
    return (
        <section className="products" id="product-section">
            <div className="container">
                <h2 className="products__title">Popüler Ürünler</h2>
                <div className="products__wrapper">
                    {
                        products.map(item => (
                            <ProductItem product={item} key={item.id} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Products
