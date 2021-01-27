import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bundle from './Bundle';
import Collection from './Collection'
import Mobobanner from './Mobobanner';

const banana = 'banana-breads';
const cookies = 'cookies';
const log = console.log;

const full = "16pcs full bundle";
const half = "8pcs half bundle";


const Home = () => {



// for rendering pages
const [page, setPage] = useState(banana)

const [bananaBreads, setBananabre] = useState([
    {
        id: 101,
        name: 'Banana Loaf',
        cost: 200,
        qnty: 1,
        image: 'images/bananaloaves.jpg',
        subname: 'banana Loaves with hazzlenuts'
        },
        {
        id: 102,
        name: 'Cream cheese',
        cost: 225,
        qnty: 1,
        image: 'images/creamcheese.jpg',
        subname: 'banana Loaves with cream cheese'
        }
])
const [cookiesBread, setCookies] = useState([
    {
        id: 201,
        name: 'Classic Cookies',
        cost: 24,
        qnty: 6,
        image: 'images/classic.jpg',
        subname: 'classic cookies loaded with choco'
        },
        {
        id: 202,
        name: 'Choco Macadamia',
        cost: 41,
        qnty: 6,
        image: 'images/chocomacadamia.jpg',
        subname: 'this cookie is mixed with white nuts'
        }
        
])
const [bundle, setBundle] = useState({
    id: 333,
    name: 'Banana Breads',
    chosen: full,
    cost: 0,
    image: 'images/collectiontwo.jpg',
    subname: 'assorted flavors of Banana Breads'
})
const [bundleqty, setbundleqty] = useState([full, half])

//////// FUNCTIONS

const changeCost = (e) => {
setBundle({...bundle, chosen: e.target.value})
}

const addTo = (e) => {

axios.get('http://localhost:5000/cart')
.then( rslts => {
const data = rslts.data;

const found = data.some(dat => dat.name === e.name)

if(found){

const find = data.find(det => det.name === e.name)

const thesum = e.cost*e.qnty;
const finalcost = thesum+find.cost;
const toUpdate = {
    name: e.name,
    cost: finalcost,
    qnty: e.qnty+find.qnty,
    subname: e.subname,
    image: e.image
}

axios.put(`http://localhost:5000/cart/${e.name}`, toUpdate)
.then( () => log('update success'))
.catch(err => log(err))

}else{
const toSave = {
    name: e.name,
    cost: e.cost*e.qnty,
    qnty: e.qnty,
    subname: e.subname,
    image: e.image
}

axios.post('http://localhost:5000/cart/add', toSave)
.then( () => log('success saving'))
.catch(err => log(err))
}

})
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

alert('One Item Is Added To The Cart')
window.location.reload();
}

// add qnty bread
// const addqnty = (e) => {
// setBananabre(bananaBreads.map(bnana => bnana.name === e.name ? {...bnana, qnty: bnana.qnty+1} : bnana))
// }
// // deduct qnty bread
// const deduct = (e) => {
// const find = bananaBreads.find(bnana => bnana.name  === e.name);

// if(find.qnty === 1){
// setBananabre(bananaBreads.map(bnana => bnana.name === e.name ? {...bnana, qnty: 1} : bnana))
// }else{
// setBananabre(bananaBreads.map(bnana => bnana.name === e.name ? {...bnana, qnty: bnana.qnty -1} : bnana))
// }

// }


// add qnty cookie
const addqntycookie = (e) => {
//setCookies(cookiesBread.map(cook => cook.name === e.name ? {...cook, qnty: cook.qnty +1 } : cook))

setCookies(cookiesBread.map(cook => {
if(cook.name === e.name){

const fixed = {...cook, qnty: cook.qnty + 1}
return fixed;

}else{
return cook;
}
}))

}

// deduct qnty cookie
const deductCookie = (e) => {
const matched = cookiesBread.find(cook => cook.name === e.name)

if(matched.qnty === 6){
setCookies(cookiesBread.map(cook => cook.name === e.name ? {...cook, qnty: 6} : cook))
}else{
setCookies(cookiesBread.map(cook => cook.name ===e.name ? {...cook, qnty: cook.qnty -1 } : cook))
}

}



const showNow = () => {
setBundle({...bundle, cost: bundle.chosen === full ? 1000 : 600})
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
                <img src="/images/collectionone.jpg"
                className="another-img" />
            </div>

            <div>
                <div className="bndle-cost">Price: ₱{bundle.chosen === full ? 1000 : 600}</div>
                <div>
                <label className="bndl-label">Choose Quantity: </label>
                <select value={bundle.chosen} onChange={changeCost} className="bndl-sel">
                {
                bundleqty.map((bndl,idx) => (
                <option value={bndl} key={idx}>{bndl}</option>
                ))
                }
                </select>
                </div>
                <div className="bndl-inst">you can choose your topings after the check out</div>
                <div className="btn-cont">
                <button onClick={() => addBundleOrder(bundle)} onMouseDown={showNow} className="bndl-btn">ADD TO CART</button>
                <button onClick={() => log(bundle)} onMouseDown={showNow} className="bndlshow-btn">SHOW ALL MENU</button>
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
          
                <div className="qnty-cap">Quantity:</div>

                <div className="qnty-cont">
                    <div className="qntys">{bread.qnty}</div>

                    <div className="qnty-btns">
                        <button onClick={() => addqntycookie(bread)} className="qnty-btn"><i className="fas fa-plus"></i></button>
                        <button onClick={() => deductCookie(bread)} className="qnty-btn"><i className="fas fa-minus"></i></button>
                    </div>
                </div>
            
        </div>
    
    <button onClick={() => addBundleOrder(bread)} className="addtocart">ADD TO CART</button>
    <button className="openmenu">OPEN ALL MENU</button>
    </div>

</div>
))
}
</div>


</div>
)
///////////////////// FUNCTIONS



//// START OF RETURNING HTML
return(
<div>


<Collection />
<Mobobanner />

<ul style={{marginTop: '60px'}} className="bread-choice">
<li>
<button className={page === banana ? 'active' : 'not-active'}
onClick={() => setPage(banana)}>Banana Breads</button>
</li>
<li>
<button className={page === cookies ? 'active' : 'not-active'}
onClick={() => setPage(cookies)}>Cookies</button>
</li>
</ul>

{page === banana ? bananaMenu() : cookiesMenu()}


<p className="gallery">Gallery</p>
<Bundle />

</div>
)}
export default Home;