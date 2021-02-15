import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';



const Cart = () => {

useEffect( () => {

if(localStorage.getItem('adminauth')){
return window.location.replace('/adminpage')
}
        
}, [])

const [code, setCode] = useState()

const theCart = localStorage.getItem('carts') === null ? [] : JSON.parse(localStorage.getItem('carts'))
const totalsum = theCart.reduce( (a,c) => a + c.cost, 0)
const resu = totalsum > 1000 ? 0 : 100;
/////////// FUNCTIONS



const remove = (torem) => {
// axios.delete(`http://localhost:5000/cart/${torem._id}`)
// .then( () => inserToCartData())
// .catch(err => log(err))

const carts = JSON.parse(localStorage.getItem('carts')) 
const toRemove = carts.filter(x => x.uni !== torem.uni)


localStorage.setItem('carts', JSON.stringify(toRemove));
window.location.reload();

if(carts.length === 1){
    localStorage.removeItem('checkout')
    localStorage.removeItem('address')
    localStorage.removeItem('localEm')
}

}

const addSumToLocal = () => {
    const toAdd = {
        totalis: totalsum,
        totalwship: totalsum+resu
    }
    localStorage.setItem('checkout', JSON.stringify(toAdd));
window.location.replace('/checkout')
}

// RENDER CARTS PRODUCT
const renderCarts = () => (
<>
{ localStorage.getItem('carts') === null || !JSON.parse(localStorage.getItem('carts')).length ? renderEmpty() : 

JSON.parse(localStorage.getItem('carts')).map(crt => (
<div className="crts" key={crt._id}>

<div className="img-and-name">

    <div className="crt-imgbx">
        <img src={crt.image} alt={crt.name}
        className="crt-img" />
    </div>
    <div className="bread-details">
        <div className="crt-name">{crt.name}</div>
        <div className="crt-subname">{crt.subname}</div>

        <div className="qnty">Quantity: {!crt.qnty ? `${crt.chosen}` : `${crt.qnty}${crt.qnty === 1 ? 'pc of bread' : 'pcs of bread'}`}</div>

        <div className="crt-btns">
        <button onClick={() => remove(crt)} className="crt-btn"><i className="fas fa-trash-alt"></i></button>
        </div>
    </div>
</div>

<div className="qnty-and-total">
    <div className="cost">{`₱${crt.cost}`}</div>
</div>

</div>
))
}
</>
)

// RENDER EMPTY CART 
const renderEmpty = () => (
<div>
<h1 className="empty-h1">No Breads In The Cart</h1>
<Link className="link-empt" to ="/">Go To Menu</Link> <i className="fas fa-arrow-left"></i>
</div>
)

// RENDER SUM
const renderSum = () => (
<>
{ localStorage.getItem('carts') === null || !JSON.parse(localStorage.getItem('carts')).length ? <> </> : <>
<div className="order-sum">
                <div className="order-sumhead">Order Summary</div>

                <div className="subtotal">
                    <div className="subtotal-cap">Subtotal</div>
                    <div className="subtotal-cap">₱{totalsum}</div>
                </div>

                <div className="charges">
                    <div className="deliver">
                    <div className="dlver">Shipping fee</div>
                    <div className="ship-fee">{resu}</div>
       
                    </div>

                    <div className="deliver">
                    <div className="dlver">Tax</div>
                    <div className="ship-fee">none</div>
                    </div>
                </div>
                
                <div className="estimation">
                    <div className="est">Order Estimation</div>
                    <div className="est">₱{totalsum+resu}</div>
                </div>
            </div>

            <div className="prom-code">
                <div className="have-promo">Promo Code ?</div>
                
                <input type="text" className="promoTxt"
                value={code} onChange={e => setCode(e.target.value)}/>
                <button className="promo-btn">
                <i className="far fa-plus-square"></i>
                </button>
                
            </div>

            <div className="checkoutbx">
            <button onClick={addSumToLocal} className="checkout">CHECKOUT</button>
            </div>
 </>}
</>
)

// RETURN JSX
return(
<div className="cart-page">

    <div className="cart-headerz">
    <i className="fas fa-home"></i>
        <h1 className="cart-headingone">Delivering Cookies Safely To Your Door</h1>
    <i className="fas fa-home"></i>
    </div>

    <div className="the-container">

        <div className="the-cart">
            <div className="cart-header">
                <div className="crt-headone">Shopping Cart</div>

                <ul className="crt-ul">
                    <li className="crt-li">Total Price</li>
                </ul>
            </div>

            <div className="crt-cont">
            {renderCarts()}
           
            </div>

        </div>

        <div className="the-sum">
        {renderSum()}
        </div>

    </div>

</div>
)
}
export default Cart;