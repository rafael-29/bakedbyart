import React from 'react'


const Collection = () => {




return(
<div className="collec-page">

<h1 className="all-prod">All Collections</h1>

<div className="collections">

    <div className="banana-coll">
        <div className="coll-imgbx">
        <img src="images/collectiontwo.jpg" alt="baked.by.art"
        className="coll-img" />
        </div>
        <div className="coll-cnt">Banana Breads</div>
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