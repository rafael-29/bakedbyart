import React from 'react'
import {Link} from 'react-router-dom'



const CookieInfo = (props) => {

const {thecookie, setThecookie, setpopup} = props
const id = props.theprops.match.params.id;



const addQty = (e) => {
const thebread = thecookie.find(c => c.id === e.id)

if(thebread.qnty === 6){
return setThecookie(thecookie.map(cook => cook.id === e.id ? {...cook, qnty: 6} : cook))
}else{
setThecookie(thecookie.map(banana => banana.id === e.id ? {...banana, qnty: banana.qnty + 2} : banana))
}
}

const deductQnty = (e) => {

const thebread = thecookie.find(c => c.id === e.id)

if(thebread.qnty === 4) return setThecookie(thecookie.map(cook => cook.id === e.id ? {...cook, qnty: 4} : cook))

setThecookie(thecookie.map(banana => banana.id === e.id ? {...banana, qnty: banana.qnty - 2} : banana))
}

const addThisToLocal = (e) => {
let items;
if(localStorage.getItem('carts') === null){
items = []
}else{
items = JSON.parse(localStorage.getItem('carts'))
}
const thebreaditem = {
uni: Math.random(items.length),
name: e.name,
subname: e.subname,
cost: e.qnty === 4 ? e.fcost : e.scost,
image: e.image,
qnty: e.qnty
}
items.push(thebreaditem)
localStorage.setItem('carts', JSON.stringify(items))
setpopup(true)
}

const renderInfo = () => {

const details = thecookie.find(banana => banana.id === +id)

return(
<div key={details.id} className="breadinfobx">
    <p className="info-name">{details.name}</p>

    <div className="infobx">
        <div className="info-imgbx">
            <img src={details.image} alt="baked.by.art" 
            className="info-img"/>
        </div>

        <div className="info-content">
            <div className="infopic-and-cnt">
                <div className="infopicbx">
                    <img src={details.image} alt="baked.by.art" 
                    className="infopic" />
                </div>
                <div className="info-cnt">
                    <p className="infonam">{details.name}</p>
                    <p className="infonam">{details.subname}</p>
                    <p className="info-costnqnty">Total Amount: {details.qnty === 4 ? ` ₱${details.fcost}`: ` ₱${details.scost}`}</p>
                </div>
            </div>
            <p className="info-qnty">Quantity: {`Box of ${details.qnty}(60g per cookie)`}</p>
            <p className="info-max-min">maximum of 6 Box. minimum of 4</p>
            <div className="info-btnz">
                        <button className="info-btn" onClick={() => addQty(details)}>ADD QUANTITY</button>
                        {details.qnty > 1 ? <button className="info-btn minus" onClick={() => deductQnty(details)}>DEDUCT QUANTITY</button> : <> </> }
             </div>

             <button className="info-addtocartbtn" onClick={() => addThisToLocal(details)}>ADD TO CART <i className="fas fa-cart-plus"></i></button>
        </div>
    </div>
</div>
)

}

return(
<div className="bread-info-page">

    <h1 style={{marginBottom: '30px'}} className="ch-logoname">
            <Link style={{textDecoration: 'none', color: 'brown'}} to="/">Baked.By.Art</Link>
    </h1>
    <h2 className="bread-details">Bread details</h2>

    <div className="info-container">
    {renderInfo()}
    </div>

</div>
)
}

export default CookieInfo