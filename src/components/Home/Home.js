import React from 'react'
import Layout from '../Layout/Layout'
import Hero from "../Hero/Hero"
import Selects from "../Selects/Selects"
import Products from "../Products/Products"
const Home = () => {
    return (
        <>
            <Layout>
                <Hero />
                <Selects />
                <Products />
            </Layout>
        </>
    )
}

export default Home
