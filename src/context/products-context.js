import React from 'react'
import { createContext, useState } from 'react'
import { PRODUCTS } from "../constants/index"

export const ProductsContext = createContext()

const ProductContextProvider = ({ children }) => {

    const [products] = useState(PRODUCTS)
    return (
        <ProductsContext.Provider value={{ products }}>
            {
                children
            }
        </ProductsContext.Provider>
    )
}

export default ProductContextProvider
