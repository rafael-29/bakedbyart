import React, { useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
const log = console.log;



const Shipping = () => {

if(localStorage.getItem('carts') === null){
window.location.replace('/')
}
const addThisTocart = JSON.parse(localStorage.getItem('carts'))
const addTotal = JSON.parse(localStorage.getItem('checkout'))
const  localemail = JSON.parse(localStorage.getItem('localEm'))


const [selectedDate, setSelectedDate] = useState(new Date())



const [shipName, setShipName] = useState();
const [shipLname, setShipLname] = useState();
const [shipAddress, setShipAdd] = useState();
const [shipSub, setShipSub] = useState();
const [shipCity, setShipCity] = useState();
const [shipPhone, setShipPhone] = useState();
const [rqMessage, setRqMessage] = useState();

const [isLoad, setIsLoad] = useState(false)

const [isComplete, setIsComplete] = useState(false)

// FUNCTIONSS
const savetoData = () => {
    renderLoadingScreen();
    const address = JSON.parse(localStorage.getItem('address'))

    const toPost = {
    orderno: Math.floor(Math.random()*90000) + 10000,
    useremail: localemail,
    useraddress:address,
    thecarts: addThisTocart,
    total: addTotal,
    orderdate: new Date()
    }

    axios.post('https://bakedbyartapi.herokuapp.com/orders/add', toPost)
    .then( () => {
    const lastinfo = {orderno: toPost.orderno};
    localStorage.setItem('lastinfo', JSON.stringify(lastinfo));
    setTimeout( ()  => {
    window.location.replace('/receipt')
    }, 1500)
    })
    .catch(err => log(err))
}

const renderBodyNone = () => {
window.document.querySelector('body').style.overflow = 'hidden';
}
const renderLoadingScreen = () => (
<div className="loadingscreen">
<div className="load-cont">
    <div className="img-loadbx">
        <img src="/images/april.png" className="img-load" alt="baked.by.art" />
    </div>
    <h3>Processing your receipt ...</h3>
    {renderBodyNone()}
</div>
</div>
)


const addtoData = (e) => {
e.preventDefault()



if(shipPhone.length < 9){
alert('Insert Valid Phone Number')
return setShipPhone('')
}

setIsLoad(true)

const toPut = {
name: shipName,
lname: shipLname,
address: shipAddress,
bldg: shipSub,
city: shipCity,
phone: shipPhone,
rqmess: rqMessage,
date: selectedDate,
}
localStorage.setItem('address', JSON.stringify(toPut))
savetoData();
}

const checkComplete = () => {
if(rqMessage === undefined || rqMessage.length === 0){
setIsComplete(false)
alert('fill the missing blanks or put NONE')
}else{
setIsComplete(true)
}
}

return(
<div className="shipping-page" style={{position: 'relative'}}>

<h1 style={{marginBottom: '30px'}} className="ch-logoname">
    <Link style={{textDecoration: 'none', color: 'brown'}} to="/">Baked.By.Art</Link>
</h1>
    <div className="ship-cont">

        <div className="shipform-cont">
            <form className="ship-form">
                    <div className="shp-header">SHIPPING</div>
                <div className="form-namelastname inpbx">

                    <input className="shp-inp namelnam-frm-inp" type="text" alt="" placeholder="Name"
                    value={shipName} 
                    onChange={e => setShipName(e.target.value)} required/>
                
                    <input className="shp-inp namelnam-frm-inp" type="text" alt="" placeholder="lastname"
                    value={shipLname} 
                    onChange={e => setShipLname(e.target.value)} required/>
                
                </div>
                <div className="ship-address-sub inpbx">

                    <input className="shp-inp shp-add" type="text" alt="" placeholder="address"
                    value={shipAddress} onChange={e => setShipAdd(e.target.value)}required/>
                
                    <input className="shp-inp" type="text" alt="" placeholder="Subv/Apt#/Bldg#"
                    value={shipSub} onChange={e => setShipSub(e.target.value)}required/>
                
                </div>
                <div className="zip-city inpbx">
                    <input className="shp-inp shp-city-inp" type="text" alt="" placeholder="City"
                    value={shipCity} onChange={e => setShipCity(e.target.value)}required/>                   
                </div>
                <div className="phone-number inpbx">
                <input className="shp-inp phone" type="number" alt="" placeholder="Phone Number"
                value={shipPhone} onChange={e => setShipPhone(e.target.value)} required/>
                </div>
                <label for="date-feker" className="date-lbl">Choose delivery date: <i class="fas fa-calendar-alt"></i> <DatePicker id="date-feker" className="date-fek" selected={selectedDate} onChange={date => setSelectedDate(date)} />
                </label>

                <fieldset className="shp-fldset">
                <legend className="cap-shp">YOU CAN LEAVE A SMALL MESSAGE HERE</legend>
                <textarea className="rq-message" value={rqMessage} 
                onChange={e => setRqMessage(e.target.value)}/>
                </fieldset>

                <div className="shp-header">BILLING</div>
                <div className="billing-bx">
                <label to="cod" className="lbl-cod">    
                <input type="radio" name="cod" id="cod" className="cod"/> 
                Cash On Delivery</label>

  
                </div>

                <div className="ship-btnbx">
                    <button onMouseMove={checkComplete} onClick={addtoData} className="ship-btn">
                    CONTINUE CHECKOUT
                    </button>
                </div>

                
            </form>
        </div>    

        <div className="ship-details">
        <div className="shp-header">YOUR ORDERS</div>
            {
            JSON.parse(localStorage.getItem('carts')).map(shpitem => (
            <div className="ship-items" key={shpitem._id}>
                <div className="ship-itemsImgBx">
                    <img src={shpitem.image} alt="baked.by.art" 
                    className="shp-img"/>
                </div>
                <div className="shipitem-name">
                    <div className="shp-name">{shpitem.name}</div>
                    <div className="shp-subname">{shpitem.subname}</div>
                    <div className="shp-qnty-cost">
                        <div className="shp-qnty">{!shpitem.qnty ? shpitem.chosen : `${shpitem.qnty}${shpitem.qnty === 1 ? 'pc of bread' : 'pcs of bread'}`}</div>
                        <div className="shp-cost">${shpitem.cost}</div>
                    </div>
                </div>
            </div>
            ))
            }
        </div>

    </div>
{isLoad ? renderLoadingScreen() : <> </>}
</div>
)
}
export default Shipping;