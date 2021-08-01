import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart, Home, NotFound, SingleProduct } from "./components/index"
const App = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/product/:id" component={SingleProduct} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>



        </>
    )
}

export default App
