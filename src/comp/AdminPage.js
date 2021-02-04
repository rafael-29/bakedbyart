import React, {useState} from 'react'


const recent = 'recent'
const finish = 'finish'

const AdminPage = () => {

const [page, setPage] = useState(recent)

//const passw = props.theprops.match.params.pass
const passw = localStorage.getItem('adminauth')
if(!passw) return window.location.replace('/signin')

const signOut = () => {
localStorage.clear()
window.location.replace('/signin')
}


const renderRecent = () => (
<div className="recent-page">
    <div className="dashfield-ttlebx">
        <h2 className="dash-field-ttle">Recent Orders</h2>
    </div>
</div>
)

const renderFinish = () => (
<div className="recent-page">
    <div className="dashfield-ttlebx">
        <h2 className="dash-field-ttle">Delivered Orders</h2>
    </div>
</div>
)


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

const returnHome = () => {
window.location.replace('/signin')
}
return(
<>
{renderAdminPage()}
</>
)
}
export default AdminPage;