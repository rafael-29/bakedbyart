import React, { useState, useEffect } from 'react';
import Bundle from './Bundle';
import Mobobanner from './Mobobanner';
import AboutCookies from './AboutCookies';
import { Link } from 'react-router-dom';

const banana = 'banana-breads';
const cookies = 'cookies';

const full = "Box of 6 (60g per cookie)";
const half = "Box of 4 (60g per cookie)";


const Home = (props) => {




const {setpopup} = props

// for rendering pages
const [page, setPage] = useState(banana)


const [cookiesBread, setCookies] = useState([
    {
        id: 201,
        name: 'Vegan Banana Loaf',
        cost: 140,
        qnty: 1,
        image: 'images/galleryone.jpg',
        subname: 'loaded with chocolate chunks'
        },
        {
        id: 202,
        name: 'Banana Loaf',
        cost: 220,
        qnty: 1,
        image: 'images/creamcheese.jpg',
        subname: 'banana loaf with cream cheese inside'
        }
        
])
const [bundle, setBundle] = useState({
    id: 333,
    name: 'Classic Choco Chips',
    chosen: full,
    cost: 0,
    image: 'images/classic.jpg',
    subname: 'Hand-mixed cookie dough, with semi-sweet chocolate chips & dark chocolate morsels'
})
const [bundleqty] = useState([full, half])


useEffect( () => {

    if(localStorage.getItem('adminauth')){
    return window.location.replace('/adminpage')
    }
  //  setSample(bundle.chosen === full ? 1000 : 600)
    }, [])
//////// FUNCTIONS

const changeCost = (e) => {
setBundle({...bundle, chosen: e.target.value})
}



const addBundleOrder = (e) => {
let items;
if(localStorage.getItem('carts') === null){
items = []
}else{
items = JSON.parse(localStorage.getItem('carts'))
}
const bundle = {
uni: Math.random(items.length),
name: e.name,
subname: e.subname,
chosen: e.chosen,
cost: e.qnty ? e.cost*e.qnty : e.cost,
image: e.image,
qnty: e.qnty
}
items.push(bundle)
localStorage.setItem('carts', JSON.stringify(items))

setpopup(true)
}

// add qnty cookie
const addqntycookie = (e) => {
//setCookies(cookiesBread.map(cook => cook.name === e.name ? {...cook, qnty: cook.qnty +1 } : cook))

// setCookies(cookiesBread.map(cook => {
// if(cook.name === e.name){

// const fixed = {...cook, qnty: cook.qnty + 1}
// return fixed;

// }else{
// return cook;
// }
// }))

setCookies(cookiesBread.map(cook => {
if(cook.name === e.name) return {...cook, qnty: cook.qnty + 1}
if(cook.name !== e.name) return cook;

}))

}

// deduct qnty cookie
const deductCookie = (e) => {

const matched = cookiesBread.find(cookie => cookie.name === e.name)

// if(matched.qnty === 6){
// setCookies(cookiesBread.map(cook => cook.name === e.name ? {...cook, qnty: 6} : cook))
// }else{
// setCookies(cookiesBread.map(cook => cook.name ===e.name ? {...cook, qnty: cook.qnty -1 } : cook))
// }


if(matched.qnty === 1){
setCookies(cookiesBread.map(cook => cook.name === e.name ? {...cook, qnty: 1} : cook))
}else{
setCookies(cookiesBread.map(cook => cook.name === e.name ? {...cook, qnty: cook.qnty - 1} : cook ))
}



}

const showNow = () => {
setBundle({...bundle, cost: bundle.chosen === full ? 300 : 200})
}



// rendering banana menus 
const bananaMenu = () => (
<div className="banana-breads">

    <div className="bundle-order">

        <div className="bndl-imgbx">
        
            <img src={bundle.image} alt="baked.by.art"
            className="bndl-img" />
        </div>

        <div className="bndl-cnt">
            <div>
                <div className="bndl-name">{bundle.name}</div>
                <div className="bndl-subname">{bundle.subname}</div>
            </div>

            <div className="another-imgbx">
                <img src="/images/trycookie.jpg"
                className="another-img"alt="baked.by.art" />
            </div>

            <div>
                <div className="bndle-cost">Price: ₱{bundle.chosen === full ? 300 : 200}</div>
                <div>
                <label className="bndl-label">Choose Quantity: </label>
                <select value={bundle.chosen} onChange={changeCost} className="bndl-sel">
                {
                bundleqty.map((bndl,idx) => (
                <option value={bndl} key={idx}>{bndl}</option>
                ))
                }
                </select>
                {/* <h3>sample: {sample}</h3> */}
                </div>
                <div className="bndl-inst">you can choose more cookies in our 
                <Link style={{color: 'brown', opacity: '.8'}} to="/cookiemenu"> MENU</Link></div>
                <div className="btn-cont">
                <button onClick={() => addBundleOrder(bundle)} onMouseDown={showNow} className="bndl-btn">ADD TO CART</button>
                <button onClick={openAllMenu} className="bndlshow-btn">SHOW ALL MENU</button>
                </div>
            </div>
        </div>

    </div>

</div>
)

// rendering cookies menu
const cookiesMenu = () => (
<div className="cookie-breads">


<div className="flex-cont">
{
cookiesBread.map(bread => (
<div className="bread-cont" key={bread.id}>

    <div className="bread-imgbx">
    <img src={bread.image} alt="baked.by.art" className="img-bread"/>
    </div>

    <div className="bread-cnt">
        <div className="bread-name">{bread.name}</div>
        <div className="bread-subname">{bread.subname}</div>

        <div className="price">₱{bread.cost*bread.qnty}</div>
            <div className="qnty-bx">

                    <div className="qnty-cont">
                        <div className="qntys"><span className="qnty-cap">Quantity</span> {bread.qnty}</div>

                        <div className="qnty-btns">
                            <button onClick={() => addqntycookie(bread)} className="qty-add-btn">add quantity</button>
                            <button onClick={() => deductCookie(bread)} className="qnty-btn"><i className="fas fa-minus"></i></button>
                        </div>
                    </div>
                
            </div>
        
        <button onClick={() => addBundleOrder(bread)} className="addtocart">ADD TO CART</button>
        <button onClick={openAllMenu} className="openmenu">OPEN ALL MENU</button>
    </div>

</div>
))
}
</div>


</div>
)
///////////////////// FUNCTIONS

// opening all menu
const openAllMenu = () => {
window.location.replace('/collection')
}

//// START OF RETURNING HTML
return(
<div>

<div className="test-home">
    <img src="/images/testwalltwo.jpg" 
    alt='baked.by.art' className="test-img" />
    <div className="madebyhand-bx">
    
        <div className="the-logobx">
            <img src="/images/april.png" alt="baked.by.art"
            className="the-logoimg" />
        </div>

        <p className="madebyhand">made by hand, from scratch, with love</p>

        <Link to="/collection" className="test-home-btn">SHOW MENU</Link>
    </div>
</div>

<Mobobanner />

<ul style={{marginTop: '60px'}} className="bread-choice">
<li>
<button className={page === banana ? 'active' : 'not-active'}
onClick={() => setPage(banana)}>Classic Cookies</button>
</li>
<li>
<button className={page === cookies ? 'active' : 'not-active'}
onClick={() => setPage(cookies)}>Banana breads</button>
</li>
</ul>

{page === banana ? bananaMenu() : cookiesMenu()}


<p className="gallery">Our finest breads</p>
<Bundle />

<p className="cookie-ttle-page">Introducing Our Cookies</p>
<AboutCookies />

</div>
)}
export default Home;