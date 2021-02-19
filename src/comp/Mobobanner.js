import React from 'react'

const Mobobanner = () => {



return(
<div className="mobobanner-page">
<img src="images/gallerytwo.jpg" alt="baked.by.art" 
className="mobo-bannimg"/>


<div className="mobo-banner-cntimgbx">
    <img src="/images/april.png"
    alt="baked.by.art" className="bann-img" />
</div>
<div className="mobo-banner-cntbx">

<p className="mobo-banner-p">made by hand, from scratch with love</p>

<button className="mobo-banner-btn" onClick={() => window.location.replace('/collection')}>SHOW MENU</button>     

</div>

</div>
)
}
export default Mobobanner;