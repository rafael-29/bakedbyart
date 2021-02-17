import React, { useState, useEffect } from 'react'
import axios from 'axios'
const log = console.log;




const Receipt = () => {

const lastinfo = JSON.parse(localStorage.getItem('lastinfo'))

lastinfo === null && window.location.reload()



const [alldata, setalldata] = useState()




useEffect( () => {

retdata();
setTimeout( () => {
    localStorage.removeItem('carts')
    localStorage.removeItem('address')
    localStorage.removeItem('checkout')
    localStorage.removeItem('localEm')
}, 1000)

}, [])

const retdata = () => {
    axios.get('https://bakedbyartapi.herokuapp.com/orders')
    .then( rslts => {
    const data = rslts.data;
    setalldata(data)
    })
    .catch(err => log(err))
}

const renderReceipt = () => {

const find = alldata.find(dat => parseInt(dat.orderno) === lastinfo.orderno)
return(
<>

    <h1 className="rcpt-header">RECEIPT</h1>

 <div className="rcpt-billinfo">
   
    <div className="bill">
        <h3 className="rcp-ttle">BILL TO</h3>
        <ul className="rcp-ul">
            <li className="rcp-li">{find.useraddress.name} {find.useraddress.lname}</li>
            <li className="rcp-li">{find.useraddress.address}</li>
            <li className="rcp-li">{find.useraddress.city}</li>
        </ul>
    </div> 

    <div className="order-info">
        <div className="order-n"><span className="order-sp">ORDER NO:</span> <span className="orderno">{find.orderno}</span></div>
        <div className="order-n"><span className="order-sp">ORDER DATE</span> <div className="date">{new Date().toLocaleDateString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})}</div></div>
        <div className="order-n"><span className="order-sp">DELIVERY DATE</span> <div className="date">{new Date(find.useraddress.date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        })}</div></div>
    </div>

</div>

<div className="rcpt-ordersec">
    <div className="rcpt-tb-header">
        <h2 className="rcpt-headers">Description</h2>
        <h2 className="rcpt-headers">Quantity</h2>
        <h2 className="rcpt-headers">Amount</h2>
    </div>

    <div className="rcpt-ordersbx">
        {
        find.thecarts.map((crt) => (
        <div className="rcpt-cart" key={crt.uni}>
            <div className="namebx">
                <div className="rcpt-namess">{crt.name}</div>
            </div>

            <div className="rcpt-namex align-rcpt">{crt.chosen ? crt.chosen : `${crt.qnty}pcs`  }</div>

            <div className="rcpt-namex">₱{crt.cost}</div>
        </div>
        ))
        }
    </div>

    <div className="type">
        <div>
            <p className="payment-ship">Ship to</p>
            <p className="payment-info">{find.useraddress.name} {find.useraddress.lname}</p>
            <p className="payment-info">{find.useraddress.address}</p>
            <p className="payment-info">{find.useraddress.bldg}</p>
            <p className="payment-info">{find.useraddress.city}</p>
        </div>

        <div>
            <p className="tobepaid">Total Amount: <span className="cash">₱ {find.total.totalwship}</span></p>
            <p className="payment">Payment Type: <span className="crt-sp">Cash On Delivery</span></p>
            <button onClick={gothere}>CONFIRM ORDER</button>
            
        </div>
    
    </div>


</div> 

</>
)

}
const gothere = () => {
localStorage.clear()
window.location.replace('/')
}

////////////// RETURN OF JSX
return(
<div className="receipt-page">

{alldata === undefined ? <h2>Loading ...</h2> : renderReceipt()}


</div>
)
}
export default Receipt;