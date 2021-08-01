import React from 'react'
import Layout from '../Layout/Layout'

const NotFound = () => {

    const style = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#e9ecef"

    }

    const style1 = {
        fontSize: "2rem",
        letterSpacing: "2px"
    }

    return (
        <Layout>
            <div style={style}>
                <p style={style1}>Not Found 404</p>
            </div>

        </Layout>
    )
}

export default NotFound
