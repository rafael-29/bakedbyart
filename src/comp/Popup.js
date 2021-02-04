import React from 'react'


const Popup = (props) => {

const {popup, setpopup} = props;

const renderMessage = () => (
<div className="popup-message">
    <div className="pop-alert">MESSAGE</div>
    <div className="pop-cont">
        <div className="popup-cnt">
            <p className="popup-p">SUCCESSFULLY</p>
            <p className="popup-p">ADDED TO CART</p>
        </div>
        <div className="popup-btnz">
            <button onClick={() => setpopup(!popup)} className="pop-btn continue-btn">CONTINUE</button>
            <button onClick={() => window.location.replace('/cart')} className="pop-btn">GO TO CART</button>
        </div>
    </div>
</div>
)
return(
<>
{popup ? renderMessage() : <></>}
</>
)
}
export default Popup