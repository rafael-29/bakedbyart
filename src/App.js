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
        name: 'banana Loaf',
        subname: 'banana loaf with cream cheese',
        cost: 170,
        qnty: 1,
        image: '/images/bmenuone.png'
        },
        {
        id: 402,
        name: 'vegan banana loaf',
        subname: 'walang def',
        cost: 170,
        qnty: 1,
        image: '/images/halfbanana.jpg'
        },
        {
        id: 403,
        name: 'banana breads delightree',
        subname: 'with wallnuts + choco chips',
        cost: 170,
        qnty: 1,
        image: '/images/bmenuthree.jpg'
        },
        {
        id: 404,
        name: 'banana breads delightur',
        subname: 'wala pa',
        cost: 170,
        qnty: 1,
        image: '/images/bmenufour.jpg'
        },
        {
        id: 405,
        name: 'banana breads delightve',
        subname: 'wala pa',
        cost: 170,
        qnty: 1,
        image: '/images/bmenufive.jpg'
        },
])

const [thecookie, setThecookie] = useState([
{
id: 499,
name: 'Ube Pandesal',
subname: 'Ube with cream cheese inside',
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
id: 502,
name: 'Cookie overload',
subname: 'cookie with a vanilla',
cost: 0,
fcost: 200,
scost: 300,
qnty: 4,
chosen: '',
image: '/images/thecookieseven.jpg'
},
{
id: 503,
name: 'white macadamia',
subname: 'cookie with a vanilla',
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
<BananasInfo setpopup={setpopup} theprops={props} thebananaz={thebananaz} setThebananaz={setThebananaz} />
)

const renderAdminPage = () => (
<AdminPage adminEntered={adminEntered}
 setAdminEntered={setAdminEntered}/>
)

const renderSignin = () => (
<Signin adminEntered={adminEntered} setAdminEntered={setAdminEntered}/>
)

const renderCookieMenu = () => (
<CookieMenu thecookie={thecookie} setThecookie={setThecookie} />
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

<Footer />
</div>
)
}
export default App;