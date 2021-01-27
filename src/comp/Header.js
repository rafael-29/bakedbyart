import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

const cartz = JSON.parse(localStorage.getItem('carts'))

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
    {cartz  === null || !cartz.length ? <> </> : <div className="class-length">{cartz.length}</div>}
    </Link>
    </li>
</ul>


</header>
)
}
