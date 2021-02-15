import React from 'react'
import { Link } from 'react-router-dom'


const AboutCookies = () => {





return(
<div className="cookis-about-page">

<div className="cookies-section-cont">
    <div className="ckies-imgbx">
    <Link to="/collection">
        <img src="/images/thecookietwo.jpg"
        alt="baked.by.art" className="ck-img"/>
    </Link>
    </div>
    <div className="ckies-imgbx">
    <Link to="/collection">
        <img src="/images/thecookiethree.jpg"
        alt="baked.by.art" className="ck-img"/>
    </Link>
    </div>
    <div className="ckies-imgbx">
    <Link to="/collection">
        <img src="/images/thecookiefour.jpg"
        alt="baked.by.art" className="ck-img"/>
    </Link>
    </div>
    <div className="ckies-imgbx">
    <Link to="/collection">
        <img src="/images/thecookiefive.jpg"
        alt="baked.by.art" className="ck-img"/>
    </Link>
    </div>
</div>

</div>
)
}
export default AboutCookies