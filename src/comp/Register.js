import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Register = () => {


const [regname, setRegname] = useState()
const [reglname, setReglname] = useState()
const [regemail, setRegemail] = useState()
const [regaddress, setRegaddress] = useState()
const [regcity, setRegcity] = useState()
const [regphone, setRegphone] = useState()
const [regpassword, setRegpassword] = useState()
const [regconfirm, setRegconfirm] = useState()



// functions
const submitReq = () => {

const data = {
regname: regname,
reglname:reglname,
regemail: regemail,
regaddress: regaddress,
regcity: regcity,
regphone: regphone,
regpassword: regpassword,
regconfirm: regconfirm
}

axios.post('http://localhost:5000/users/add', data)
.then( () => console.log('already sent'))
.catch(err => console.log(err))

}


return(
<div className="register-page">

<h1 style={{marginBottom: '30px'}} className="ch-logoname">
        <Link style={{textDecoration: 'none', color: 'brown'}} to="/">Baked.By.Art</Link>
</h1>
    <h3 className="sign-cap">Online Account Registration</h3>
    <p className="reg-cnt">To register as a member of Baked.By.Art, simply complete the form below.
Please note: You must be 18 years of age or older to register an account.</p>



<form className="reg-form" onSubmit={submitReq}>
    <div className="reg-first">

        <label className="sign-lbl">Name</label>
        <div className="reg-namebx">
            <input type="text" className="reg-input regn"
            value={regname} onChange={e => setRegname(e.target.value)}
            placeholder="name" required/>

            <input type="text" className="reg-input"
            value={reglname} onChange={e => setReglname(e.target.value)}
            placeholder="last name" required/>
        </div>

        <label className="sign-lbl">Email</label>
        <input type="email" className="reg-input  regfull"
        value={regemail} onChange={e => setRegemail(e.target.value)} required />
        
        <label className="sign-lbl">Address</label>
        <div className="reg-namebx">
        
            <input type="text" className="reg-input regn"
            value={regaddress} onChange={e => setRegaddress(e.target.value)}
            placeholder="Address" required/>

            <input type="text" className="reg-input"
            value={regcity} onChange={e => setRegcity(e.target.value)}
            placeholder="City" required/>

        </div>
        
        <label className="sign-lbl">Phone Number</label>
        <input type="number" className="reg-input regfull"
        value={regphone} onChange={e => setRegphone(e.target.value)} required />
    </div>

    <div className="reg-second">
        <label className="sign-lbl">Your Password</label>
        <input style={{marginBottom: '5px'}} type="password" className="reg-input"
        value={regpassword} onChange={e => setRegpassword(e.target.value)} required />

        <label className="sign-lbl">Confirm Password</label>
        <input type="password" className="reg-input"
        value={regconfirm} onChange={e => setRegconfirm(e.target.value)} required />

        <button className="sign-btn">Register Now</button>
    </div>
</form>




</div>
)
}
export default Register;