import React from 'react'
import {Link} from 'react-router-dom'



const BananasInfo = (props) => {

const {thebananaz, setThebananaz} = props
const id = props.theprops.match.params.id;


const renderInfo = () => {

const details = thebananaz.find(banana => banana.id === +id)

return(
<div key={details.id}>
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
                    <p className="infonam">Bread Quantity {details.qnty} Amount: {`$${details.cost}`} </p>
                </div>
            </div>
            <div className="info-btnz">
                        <button className="info-btn">ADD QUANTITY</button>
                        {details.qnty > 1 ? <button className="info-btn">DEDUCT QUANTITY</button> : <> </> }
             </div>
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