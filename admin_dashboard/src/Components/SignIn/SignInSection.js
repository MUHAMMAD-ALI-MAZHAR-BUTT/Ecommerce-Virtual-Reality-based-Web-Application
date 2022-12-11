import React from 'react'
import "../../styles/SignIn/SignInSection.css"
import { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';
import axios from 'axios';
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
  const handleSubmit=async(e)=>{
   e.preventDefault();
  
   try{
    const url="http://localhost:8080/api/auth";
   
    const{data:res}=await axios.post(url,user);
    localStorage.setItem("token",res.data);
    window.location="/";
    console.log(res.message);
   }
   catch(error)
   {
    if(error.response && 
      error.response.status >= 400 &&
      error.response.status <= 500
      )
      {
        setError(error.response.data.message);
      }
   }
  }
  return (
    <>
    
    <div className="container-fluid ">
      <div className='row'>
        <div className='col pt-md-4 d-flex justify-content-center'>
<div className="row w-100 mb-md-5 my-0 ">
<div className="inner-section d-flex flex-column ">
<h1 className="text-center SignInHeading "> Sign In</h1>
<form onSubmit={handleSubmit }>
          <div className="mb-md-1 mb-1 mt-md-5">
           
  <label className="form-label">Enter your Email address</label>
  <input type="email" className="form-control shadow-none"  placeholder="name@example.com"  id="message"
        name="email" required
        onChange={handleChange} />
 <div className='ms-2 mt-1'> {error && <span style={{color: 'red'}}>{error}</span>}</div>
</div>
<div className="mb-md-4 mb-1 mt-md-2">
  <label className="form-label">Enter your Password</label>
  <input type={typePassword} name="password" required className="form-control shadow-none"  placeholder="●●●●●●●●●●●" id="myInput"
  onChange={(e)=>Assignment(e.target.name,e.target.value)}
  />
</div>
<div className="">
<input type="checkbox" onClick={myFunction}/>Show Password
</div>

          <button type="submit " className="btn btn-primary mb-1" >Sign In</button>
          </form> 
         </div>
</div>
          </div>
      </div>
    </div>
    </>
  )
}
