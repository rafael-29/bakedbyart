import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./comp/Header";
import Home from "./comp/Home";
import Cart from "./comp/Cart";
import Collection from "./comp/Collection";
import Checkout from './comp/Checkout';
import Shipping from './comp/Shipping';
import Footer from './comp/Footer';
import Receipt from './comp/Receipt';
import Signin from './comp/Signin';
import Register from './comp/Register';


import "./styles/styles.css";

const App = () => {




const renderHome = () => (
<>
<Header />
<Home />
</>
)

const renderCart = () => (
<>
<Header />
<Cart />
</>
)

const renderCollection = () => (
<>
<Header />
<Collection />
</>
)

const renderShip = () => (
<Shipping />
)



return(
<div>

<Router>


<Route path="/" exact render={renderHome} />
<Route path="/cart" render={renderCart} />
<Route path="/collection" render={renderCollection} />
<Route path="/checkout">
<Checkout />
</Route>

<Route path="/shipping" render={renderShip} /> 
<Route path="/receipt" component={Receipt} />
<Route path="/signin" exact component={Signin} />
<Route path="/signin/register" exact component={Register} />


</Router>

<Footer />
</div>
)
}
export default App;