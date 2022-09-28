import React from 'react'
import "../../styles/SignIn/SignInSection.css"
import { useState } from 'react';
export default function SignInSection() {
  const [error, setError] = useState(null);
  const [typePassword,SetPasswordType]=useState("password");
  const [user,SetUser]=useState({
    email:"",
    password:"",
  });
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  function myFunction() {
    typePassword==="password"?SetPasswordType("text"):SetPasswordType("password");
  }
  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else{
      setError(null);
    
    }
    Assignment(event.target.name,event.target.value);
  };
  function Assignment(name,value)
  {
    SetUser({...user,[name]:value});
  }
  console.log(user)
  return (
    <>
    
    <div className="container-fluid ">
      <div className='row'>
        <div className='col pt-md-4 d-flex justify-content-center'>
<div className="row w-100 mb-md-5 my-0">
<div className="inner-section d-flex flex-column ">
          <h1 className='pt-md-4 pt-1 Heading'> Sign In</h1>
          <div className="mb-md-1 mb-1 mt-md-5">
  <label className="form-label">Enter your Email address</label>
  <input type="email" className="form-control shadow-none"  placeholder="name@example.com"  id="message"
        name="email"
        onChange={handleChange} />
 <div className='ms-2 mt-1'> {error && <span style={{color: 'red'}}>{error}</span>}</div>
</div>
<div className="mb-md-4 mb-1 mt-md-2">
  <label className="form-label">Enter your Password</label>
  <input type={typePassword} name="password" className="form-control shadow-none"  placeholder="●●●●●●●●●●●" id="myInput"
  onChange={(e)=>Assignment(e.target.name,e.target.value)}
  />
</div>
<div className="">
<input type="checkbox" onClick={myFunction}/>Show Password
</div>

          <button type="submit " className="btn btn-primary mb-1">Sign In</button>
         </div>
</div>
          </div>
      </div>
    </div>
    </>
  )
}
