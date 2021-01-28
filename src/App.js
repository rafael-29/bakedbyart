import React, {useState} from 'react'
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
import Bananamenus from './comp/Bananamenus';
import BananasInfo from './comp/BananasInfo';


import "./styles/styles.css";

const App = () => {

const [thebananaz, setThebananaz] = useState([
        {
        id: 401,
        name: 'Menu One',
        subname: 'wala pa',
        cost: 170,
        qnty: 1,
        image: '/images/bmenuone.png'
        },
        {
        id: 402,
        name: 'Menu Two',
        subname: 'wala pa',
        cost: 170,
        qnty: 1,
        image: '/images/halfbanana.jpg'
        },
        {
        id: 403,
        name: 'Menu Three',
        subname: 'wala pa',
        cost: 170,
        qnty: 1,
        image: '/images/bmenuthree.jpg'
        },
        {
        id: 404,
        name: 'Menu Four',
        subname: 'wala pa',
        cost: 170,
        qnty: 1,
        image: '/images/bmenufour.jpg'
        },
        {
        id: 405,
        name: 'Menu Five',
        subname: 'wala pa',
        cost: 170,
        qnty: 1,
        image: '/images/bmenufive.jpg'
        },
])
   


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

const renderBananaMenu = () => (
<Bananamenus thebananaz={thebananaz} setThebananaz={setThebananaz}/>
)

const renderBananasInfo = (props) => (
<BananasInfo theprops={props} thebananaz={thebananaz} setThebananaz={setThebananaz} />
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
<Route path="/bananamenu" render={renderBananaMenu} />
<Route path="/bananasinfo/:id" render={renderBananasInfo} />


</Router>

<Footer />
</div>
)
}
export default App;