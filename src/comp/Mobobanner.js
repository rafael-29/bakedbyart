import React from 'react'

const Mobobanner = () => {



return(
<div className="mobobanner-page">
<img src="images/gallerytwo.jpg" alt="baked.by.art" 
className="mobo-bannimg"/>

<div className="mobo-banner-cntbx">
<p className="mobo-banner-p">made by hand, from scratch with love</p>
    <div className="mobo-banner-btnbx">
        <button className="mobo-banner-btn" onClick={() => window.location.replace('/collection')}>Banana Breads Menu</button>     
        <button className="mobo-banner-btn" onClick={() => window.location.replace('/collection')}>Cookies Menu</button>     
    </div>
</div>

</div>
)
}
export default Mobobanner;