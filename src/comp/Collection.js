import React from 'react'
import {Link} from 'react-router-dom'


const Collection = () => {




return(
<div className="collec-page">

<h1 className="all-prod">Made by hand, from scratch with love</h1>

<div className="collections">

    <div className="banana-coll">
    <Link style={{textDecoration: 'none'}} to="/bananamenu">
        <div className="coll-imgbx">
        <img src="images/collectiontwo.jpg" alt="baked.by.art"
        className="coll-img" />
        </div>
        <div className="coll-cnt">Banana Breads</div>
    </Link>
    </div>

    <div className="cookie-coll">
    
        <div className="coll-imgbx">
        <img src="images/collectionthree.jpg" alt="baked.by.art"
        className="coll-img" />   
        </div>
        <div className="coll-cnt">Cookies</div>
    
    </div>

</div>


</div>
)
}
export default Collection;