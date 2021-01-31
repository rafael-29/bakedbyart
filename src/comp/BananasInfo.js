import React from 'react'
import {Link} from 'react-router-dom'



const BananasInfo = (props) => {

const {thebananaz, setThebananaz} = props
const id = props.theprops.match.params.id;


const addQty = (e) => {
setThebananaz(thebananaz.map(banana => banana.id === e.id ? {...banana, qnty: banana.qnty + 1} : banana))
}

const deductQnty = (e) => {
setThebananaz(thebananaz.map(banana => banana.id === e.id ? {...banana, qnty: banana.qnty - 1} : banana))
}

const addThisToLocal = (e) => {
let items;
if(localStorage.getItem('carts') === null){
items = []
}else{
items = JSON.parse(localStorage.getItem('carts'))
}

items.push(e)
localStorage.setItem('carts', JSON.stringify(items))
}

const renderInfo = () => {

const details = thebananaz.find(banana => banana.id === +id)

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
                    <p className="info-costnqnty">Total Amount: {`$${details.cost*details.qnty}`}</p>
                </div>
            </div>
            <p className="info-qnty">Quantity: {details.qnty > 1 ? `${details.qnty} pieces` : `${details.qnty} piece`}</p>
            <div className="info-btnz">
                        <button className="info-btn" onClick={() => addQty(details)}>ADD QUANTITY</button>
                        {details.qnty > 1 ? <button className="info-btn minus" onClick={() => deductQnty(details)}>DEDUCT QUANTITY</button> : <> </> }
             </div>

             <button className="info-addtocartbtn" onClick={() => addThisToLocal(details)}>ADD TO CART <i class="fas fa-cart-plus"></i></button>
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
    <h2 className="bread-details">Bread Details</h2>

    <div className="info-container">
    {renderInfo()}
    </div>

</div>
)
}

export default BananasInfo