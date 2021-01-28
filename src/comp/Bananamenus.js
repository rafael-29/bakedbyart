import React from 'react'
import {Link} from 'react-router-dom'


const Bananamenus = (props) => {

const {thebananaz, setThebananaz} = props

return(
<div className="menu-page">

<h1 style={{marginBottom: '30px'}} className="ch-logoname">
        <Link style={{textDecoration: 'none', color: 'brown'}} to="/">Baked.By.Art</Link>
</h1>

<h1 className="menu-page-ttle">Banana Breads</h1>

<div className="menu-container">
{
thebananaz.map(banana => (
<div key={banana.id} className="themenu-bx">
<Link className="link-menu" to={`/bananasinfo/${banana.id}`}>
    <div className="menu-imgbx">
        <img src={banana.image} alt="baked.by.art"
        className="img-bananaimg" />    
    </div>
    <div className="menu-cnt">
        <p className="menu-name">
            {banana.name}
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
export default Bananamenus;