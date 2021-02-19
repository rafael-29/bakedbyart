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
import Popup from './comp/Popup';
import AdminPage from './comp/AdminPage';

import "./styles/styles.css";
import CookieMenu from './comp/CookieMenu';
import CookieInfo from './comp/CookieInfo'



const App = () => {

const [thebananaz, setThebananaz] = useState([
        {
        id: 401,
        name: 'banana loaf(w/ cream cheese)',
        subname: '',
        cost: 220,
        qnty: 1,
        image: '/images/bmenuone.png'
        },
        {
        id: 402,
        name: 'vegan banana loaf',
        subname: 'none',
        cost: 170,
        qnty: 1,
        image: '/images/halfbanana.jpg'
        },
        {
        id: 403,
        name: 'vegan banana loaf(w/ wallnuts & choco chips)',
        subname: 'w wallnuts & choco chips',
        cost: 200,
        qnty: 1,
        image: '/images/bmenuthree.jpg'
        },
        {
        id: 404,
        name: 'cream cheese banana bread',
        subname: 'none',
        cost: 170,
        qnty: 1,
        image: '/images/bmenufour.jpg'
        },
        {
        id: 405,
        name: 'vegan banana loaf(w/ choco chunks)',
        subname: 'none',
        cost: 190,
        qnty: 1,
        image: '/images/bmenufive.jpg'
        },
        {
        id: 406,
        name: 'plain vegan banana loaf(w/ banana on top)',
        subname: 'none',
        cost: 150,
        qnty: 1,
        image: '/images/bmenusix.png'
        },
        {
        id: 406,
        name: 'vegan banana loaf(w/ chocolate chips)',
        subname: 'none',
        cost: 160,
        qnty: 1,
        image: '/images/bmenuseven.png'
        },
        
])

const [thecookie, setThecookie] = useState([
{
id: 499,
name: 'Ube Cheese Pandesal',
subname: 'Ube pandesal with cream cheese inside',
cost: 0,
fcost: 200,
scost: 300,
qnty: 4,
chosen: '',
image: '/images/thecookieone.jpg'
},
{
id: 501,
name: 'Classic Choco Chips',
subname: 'Hand-mixed cookie dough, with semi-sweet chocolate chips & dark chocolate morsels',
cost: 0,
fcost: 200,
scost: 300,
qnty: 4,
chosen: '',
image: '/images/thecookieeight.jpg'
},
{
id: 503,
name: 'white choco macadamia',
subname: 'this cookie is loaded with white choco inside',
cost: 0,
fcost: 200,
scost: 300,
qnty: 4,
chosen: '',
image: '/images/chocomacadamia.jpg'
},
])
   
const [popup, setpopup] = useState(false)

const [adminEntered, setAdminEntered] = useState(false)

const renderHome = () => (
<>
<Header />
<Home setpopup={setpopup}/>
<Footer />
</>
)

const renderCart = () => (
<>
<Header />
<Cart />
<Footer />
</>
)

const renderCollection = () => (
<>
<Header />
<Collection />
<Footer />
</>
)

const renderShip = () => (
<>
<Shipping />
<Footer />
</>
)

const renderBananaMenu = () => (
<Bananamenus thebananaz={thebananaz} setThebananaz={setThebananaz}/>

)

const renderBananasInfo = (props) => (
<BananasInfo setpopup={setpopup} theprops={props} thebananaz={thebananaz} setThebananaz={setThebananaz} />

)

const renderAdminPage = () => (
<AdminPage adminEntered={adminEntered}
 setAdminEntered={setAdminEntered}/>
)

const renderSignin = () => (
<>
<Signin adminEntered={adminEntered} setAdminEntered={setAdminEntered} />
<Footer />
</>
)

const renderCookieMenu = () => (
<> 
<CookieMenu thecookie={thecookie} setThecookie={setThecookie} />
<Footer />
</>
)

const renderCookiesInfo = (props) => (
<CookieInfo setpopup={setpopup} theprops={props} thecookie={thecookie} setThecookie={setThecookie} />      
)

return(
<div>
<Popup popup={popup} setpopup={setpopup} />

<Router>


<Route path="/" exact render={renderHome} />
<Route path="/cart" render={renderCart} />
<Route path="/collection" render={renderCollection} />
<Route path="/checkout">
<Checkout />
</Route>

<Route path="/shipping" render={renderShip} /> 
<Route path="/receipt" component={Receipt} />
<Route path="/signin/" exact render={renderSignin} />
<Route path="/signin/register" exact component={Register} />
<Route path="/bananamenu" render={renderBananaMenu} />
<Route path="/bananasinfo/:id" render={renderBananasInfo} />
<Route path="/cookiesinfo/:id" render={renderCookiesInfo} />
<Route path="/adminpage" render={renderAdminPage} />
<Route path="/cookiemenu" render={renderCookieMenu} />

</Router>
</div>
)
}
export default App;