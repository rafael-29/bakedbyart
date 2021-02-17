import React, {useEffect, useState} from 'react'
import axios from 'axios'

const recent = 'recent'
const finish = 'finish'

const AdminPage = () => {

const [page, setPage] = useState(recent)
const [allOrders, setAllOrders] = useState()
const [finishOrder, setAllFinishOrder] = useState()



const signOut = () => {
localStorage.clear()
window.location.replace('/signin')
}



////// RETRIEVING DATA FROM MONGO DATA BASE
const retrieveOrders = () => {
axios.get('https://bakedbyartapi.herokuapp.com/orders')
.then( rslts => {
const data = rslts.data;
setAllOrders(data)
})
.catch(err => console.log(err))
}
const retrieveFinishOrder = () => {
    axios.get('https://bakedbyartapi.herokuapp.com/finish')
    .then( rslts => {
    const data = rslts.data;
    setAllFinishOrder(data)
    })
    .catch(err => console.log(err))
}
/////////////////////////////////////////// .........................

const deleteOrder = (todel) => {
axios.delete(`https://bakedbyartapi.herokuapp.com/orders/${todel.orderno}`)
.then( () => retrieveOrders())
.catch(err => console.log(err))

}
const deleteFinishOrder = (del) => {
axios.delete(`https://bakedbyartapi.herokuapp.com/finish/${del.orderno}`)
.then( () => retrieveFinishOrder())
.catch(err => console.log(err))
}

const closeX = () => {
window.location.reload()
}
// SHOWING ORDERS IN BIG SCREEN
const showOrderBig = (e) => (
    <div className="the-order-popup">
    <button className="pop-x" onClick={closeX}>X</button>
    
    <p className="pop-orderno">Orderno: <span className="pop-span"> {e.orderno}</span></p>
    <br />
    <h3>Person Details</h3>
    <hr />
    <p className="pop-orderno">Name: <span className="pop-span">{e.useraddress.name} {e.useraddress.lname}</span></p>
    <p className="pop-orderno">Address: <span className="pop-span">{e.useraddress.address}</span></p>
    <p className="pop-orderno">Village: <span className="pop-span">{e.useraddress.bldg}</span></p>
    <p className="pop-orderno">City: <span className="pop-span">{e.useraddress.city}</span></p>
    <p className="pop-orderno">Email: <span className="pop-span">{e.useremail}</span></p>
    <p className="pop-orderno">Phone Number: <span className="pop-span">{e.useraddress.city}</span></p>
    
    <hr />

    <h3>Person Order</h3>
    {e.thecarts.map(cart => (
    <div key={cart._id}>
    <p className="pop-orderno">{cart.name}</p>
    <p className="pop-orderno">{cart.subname}</p>
    <p className="pop-orderno">{cart.cost}Pesos {cart.qnty}</p>
    </div>
    ))}

    
    </div>
)

// SAVE TO FINISHED ORDER
const saveToFinish = (ord) => {
axios.post('https://bakedbyartapi.herokuapp.com/finish/add', ord)
.then( () => {
retrieveFinishOrder()

window.document.getElementById('delete-order').click()

})
.catch(err => console.log(err))
}

const renderAllOrders = () => {
return allOrders.map(order => (
<div className="order-bx" key={order.orderno} onClick={() => window.document.querySelector('.the-order-popup').style.display="block" }>
    <div className="order">{order.orderno}</div>
    <div className="order ol-header-mob">{new Date(order.orderdate).toLocaleDateString('en-US',{
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
    })}</div>
    <div className="order ol-header-mob">{new Date(order.useraddress.date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
    }) }</div>
    <div className="order">₱{order.total.totalwship}</div>
    <div className="order order-btnz">
        <button onClick={() => saveToFinish(order)} className="ol-btn ol-btn-check"><i className="far fa-check-circle da-check"></i></button>
        <button id="delete-order" onClick={() => deleteOrder(order)} className="ol-btn"><i className="far fa-times-circle"></i></button> 
    </div>
{showOrderBig(order)}
</div>
))
}



const renderFinishOrders = () => {
    return finishOrder.map(order => (
    <div className="order-bx" key={order.orderno}>
        <div className="order">{order.orderno}</div>
        <div className="order ol-header-mob">{new Date(order.orderdate).toLocaleDateString('en-US',{
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
        })}</div>
        <div className="order ol-header-mob">{new Date(order.useraddress.date).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
        }) }</div>
        <div className="order">₱{order.total.totalwship}</div>
        <div className="order order-btnz">
            <button onClick={() => deleteFinishOrder(order)} className="ol-btn"><i className="far fa-times-circle"></i></button> 
        </div>
    </div>
    ))
}


const renderRecent = () => (
<div className="recent-page">
    <div className="dashfield-ttlebx">
        <h2 className="dash-field-ttle">Recent Orders</h2>
    </div>
    <div className="orderlist-container">
        <div className="orderlist-headerz">
            <div className="ol-header">order no.</div>
            <div className="ol-header ol-header-mob">order date</div>
            <div className="ol-header ol-header-mob">delivery date</div>
            <div className="ol-header">total</div>
            <div className="ol-header">actions</div>
        </div>
        <div className="o-container">
        {allOrders === undefined || !allOrders.length ? <>No Orders as of yet</> : renderAllOrders()}
        </div>
        
    </div>
</div>
)

const renderFinish = () => (
<div className="recent-page">
    <div className="dashfield-ttlebx">
        <h2 className="dash-field-ttle">Delivered Orders</h2>
    </div>
    <div className="orderlist-container">
        <div className="orderlist-headerz">
            <div className="ol-header">order no.</div>
            <div className="ol-header ol-header-mob">order date</div>
            <div className="ol-header ol-header-mob">delivery date</div>
            <div className="ol-header">total</div>
            <div className="ol-header">actions</div>
        </div>
        <div className="o-container">
        {finishOrder === undefined || !finishOrder.length ? <>NO DELIVERED ORDERS</> : renderFinishOrders()}
        </div>
        
    </div>
</div>
)

useEffect(() => {
retrieveOrders()
retrieveFinishOrder()
}, [])



const passw = localStorage.getItem('adminauth')
if(!passw) return window.location.replace('/signin')




/////// START OF JSX
const renderAdminPage = () =>  (
    <div className="admin-page">
        <div className="dashboard">
    
            <div className="dash-header">
                <div className="dash-imgbx">
                    <img src="/images/april.png" alt="baked.by.art" 
                    className="dash-img"/>
                </div>
                <p className="admin-name">BAKED.BY.ART</p>
            </div>
    
    
            <div className="dash-content">
                <div className="dash-cnt-ttlebx">
                <img src="/images/dashboard.svg" alt="baked.by.art" 
                className="dashsvg" />
                <p className="dash-cnt-title">Dashboard</p>
                </div>
                <div className={page === recent ? 'dashpicked' : 'dash-cntbx'} onClick={() => setPage(recent)}>
                    <div className="dash-png-lbel">
                        <i className="far fa-clock"></i>
                        <p className="dash-cnt-name">Recent Orders</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className={page === finish ? 'dashpicked' : 'dash-cntbx'} onClick={() => setPage(finish)}>
                    <div className="dash-png-lbel">
                        <i className="far fa-check-circle"></i>
                        <p className="dash-cnt-name">Finished Orders</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
            
        </div>
    
        <div className="dash-field">
        <button onClick={signOut} className="signout-btn">Sign Out</button>
        {page === recent ? renderRecent() : renderFinish()}

        </div>
    
    </div>
)

return(
<>
{renderAdminPage()}
</>
)
}
export default AdminPage;