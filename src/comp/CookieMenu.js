import React from 'react'
import {Link} from 'react-router-dom'


const CookieMenu = (props) => {

const {thecookie, setThecookie} = props

return(
<div className="menu-page">

<h1 style={{marginBottom: '30px'}} className="ch-logoname">
        <Link style={{textDecoration: 'none', color: 'brown'}} to="/">Baked.By.Art</Link>
</h1>

<h1 className="menu-page-ttle">Cookies Menu</h1>

<div className="menu-container">
{
thecookie.map(banana => (
<div key={banana.id} className="themenu-bx">
<Link className="link-menu" to={`/cookiesinfo/${banana.id}`}>
    <div className="menu-imgbx">
        <img src={banana.image} alt="baked.by.art"
        className="img-bananaimg" />    
    </div>
    <div className="menu-cnt">
        <p className="menu-name">
            {banana.name}
        </p>
        <p className="menu-name">
            {banana.subname}
        </p>
        <p className="menu-cost">{`₱ ${banana.cost.toFixed(2)}`} </p>

        <Link className="link-menu" to="/bananainfo" />

    </div>
</Link>
</div>
))
}
</div>

</div>
)
}
export default CookieMenu;