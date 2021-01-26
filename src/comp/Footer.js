import React from 'react'

export default function Footer() {
    return (
        <div>

<footer>
    <div className="footer-logobx">
        <img src="/images/april.png" alt="baked.by.art" 
        className="footer-logoimg"/>
    </div>


    <div className="custom-tell">
        <div className="cst-one">
        <p className="custom-head">CUSTOM ORDERS</p>
        <p className="custom-cnt">Would you like to place a Custom Order or have a special request? </p>
        <a href="mailto:aprilbtupas@gmail.com" className="footer-a">message us</a>
        </div>

        <div className="cst-two">
        <p className="custom-head">WE LOVE TO HEAR FROM YOU</p>
        <p className="custom-cnt">Have feedback about our products or service? Please contact us directly at:</p>
        <a href="mailto:aprilbtupas@gmail.com" className="footer-a">aprilbtupas@gmail.com</a>
        </div>
    </div>

    <div className="footer-categ">
        <ul className="footer-nav">
            <li className="footer-li">
            <a href="/about" className="footer-a">ABOUT</a>
            </li>
            <li className="footer-li">
                <a href="/collection" className="footer-a">MENU</a>
            </li>
            <li className="footer-li">
                <a href="/collection" className="footer-a opencon">ORDER ONLINE</a>
            </li>
            <li className="footer-li">
                <a href="/" className="footer-a opencon">CUSTOM ORDER</a>
            </li>
        </ul>
    </div>

</footer>
<div className="copyright">
<p className="p-copyright">Copyright © Baked.By.Art 2020</p>
</div>
        
        </div>
    )
}
