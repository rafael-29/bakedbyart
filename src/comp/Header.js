import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

const [moboActiv, setMoboActiv] = useState(false)

const cartz = JSON.parse(localStorage.getItem('carts'))

const openCloseMobo = () => {
setMoboActiv(!moboActiv)
}

useEffect( () => {
if(moboActiv === true) {
window.document.querySelector('body').style.overflow = 'hidden'
}else{
window.document.querySelector('body').style.overflow = 'visible'
}
}, [moboActiv])

return(
<header style={{position: 'relative', zIndex: '3'}}>

<h2 className="logo-name">
<Link className="link-logo" to="/">Baked.By.Art</Link>
</h2>

<ul className="header-ul">
    <li className="header-li">
    <Link className="link-cart" to="/collection">Collections</Link>
    </li>
    <li className="header-li">
    <Link className="link-cart" to="/signin">Sign in</Link>
    </li>
    <li className="header-li">
    <Link className="link-cart" to="/cart"><i className="fas fa-shopping-cart"></i>
    {cartz === null || !cartz.length ? <> </> : <div className="class-length">{cartz.length}</div>}
    </Link>
    </li>
</ul>

<div onClick={openCloseMobo} className={moboActiv ? 'mobo-open-menubx' : 'mobosize-menubx'}>
    <div className="mobomenu-line"></div>
</div>

<div className={moboActiv ? 'mobo-slidemenu-open' : 'mobo-slidemenu'}>
<ul className="mobo-header-ul">
    <li className="mobo-header-li">
    <Link className="mobo-link-cart" to="/collection">MENU</Link>
    </li>
    <li className="mobo-header-li">
    <Link className="mobo-link-cart" to="/signin">SIGN IN</Link>
    </li>
    <li className="mobo-header-li">
    <Link className="mobo-link-cart" to="/cart">CART<i className="fas fa-shopping-cart"></i></Link>
    </li>
</ul>
</div>

</header>
)
}
