import React from 'react'
import {Link} from 'react-router-dom'


const Collection = () => {




return(
<div className="collec-page">

<h1 className="all-prod">Select from our category</h1>

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
    <Link style={{textDecoration: 'none'}} to="/cookiemenu">
        <div className="coll-imgbx">
        <img src="images/collectionthree.jpg" alt="baked.by.art"
        className="coll-img" />   
        </div>
        <div className="coll-cnt">Cookies</div>
    </Link>
    </div>

</div>


</div>
)
}
export default Collection;