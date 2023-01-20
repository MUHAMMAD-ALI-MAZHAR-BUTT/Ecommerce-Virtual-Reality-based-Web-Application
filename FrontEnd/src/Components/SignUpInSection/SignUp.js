import { React,useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../CSS/Component/SignUpIn/SignUp.css"
export default function SignUp() {
  const [FlipCard,SetFlipCard]=useState(0);
  const [disabled,Setdisabled]=useState(true);
  const [AccountCreated,SetAccountCreated]=useState(0);
  const [warning,setwarning]=useState(0);
  const [warningText,setwarningText]=useState("");
  const [LoginedFailed,setLoginedFailed]=useState();
  const navigate = useNavigate();
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
  const [data, setData] = useState({
		Username: "",
		Email: "",
		Password: "",
	});
  const [SignInData,setSignInData]=useState({
    "Email":"",
    "Password":""
  })
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
        
	};
  const SignInDataHandle=(e)=>{
    setSignInData({...SignInData,[e.target.name]:e.target.value});
    console.log(SignInData);
  }
function ConfirmPassword(){
    if(document.getElementById("Password").value===document.getElementById("ConfirmPassword").value)
    {
        Setdisabled(false);
        setwarningText("");
        setwarning(0);
    }
    else{
        Setdisabled(true);
        setwarningText("Confirm Password is not same");
        setwarning(1);
    }
}
const CreateAccount= async()=>
  {
    const {Username,Email,Password}=data;
  let result=await fetch('http://localhost:5000/register',
  {
    method:"post",
    body:JSON.stringify({Username,Email,Password}),
    headers:{'Content-Type':'application/json'},
  }).then((e)=>e.text()).then((data)=>data);
  if(result===401)
  {
    SetAccountCreated(0);
    console.log("User not created");
  }
  else{
    SetAccountCreated(1);
    Object.keys(data).forEach(key => {
      data[key]="";
    });
    localStorage.setItem("jwttken",JSON.stringify({result,Email}))
    
    console.log(`User created successfully with JWT Token  :  + ${result}`);
    navigate("/");
  }
  };
  const SignIn=async()=>
  {
let {Email,Password}=SignInData;
const response=await fetch("http://localhost:5000/signin",{
method:"post",
body:JSON.stringify({Email,Password}),
headers:{'Content-Type':'application/json'},
  }
).then((e)=>e.text()).then((data)=>data)
if(response===401)
{
  console.log("Some error occured while signin");
  setLoginedFailed(0);
}
else
{
  console.log("User successfully Signed in");
  localStorage.setItem("jwttken",JSON.stringify({response,Email}))
  navigate("/");
}
  }
function Flip()
{
FlipCard===0?SetFlipCard(1):SetFlipCard(0);
}

  return (
    <>
    <div className="container-fluid SignUpContainer">
   <div className='row ms-sm-5 mt-sm-5 mb-sm-5 '>
    <div className='col-md-6'>
    <motion.div
    className="container"
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 360,
      damping: 100
    }}>
      <img src="Images/SignUp/SignUp.png" className=' SignUpImage' alt="SignInto Your Account"/>
    </motion.div>
    </div>
    <div className='col-md-6'>
 <div className='container-fluid'>
  <div className='row'>
  <div className='Container-Sign'>
<div className={`inner-Section-Card ${FlipCard===0?"":"inner-Section-Cardflip"}`}>
{ FlipCard===0 && <div className='SignUp-Card-front '>
  <div className='container-fluid'>
    <div className='row'>
      <h1 style={{'textAlign':'center'}}>SignUp</h1>
    </div>
    <div className='row'>
      <form >
      <div className="mb-3">
  <label className="form-label">Username</label>
  <input type="text" className="form-control" placeholder="Muhammad Ali" name="Username"
							onChange={handleChange}
							value={data.Username}
							required/>
</div>
      <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" className="form-control" placeholder="name@example.com"
  name="Email"
  onChange={handleChange}
  value={data.email}
  required/>
</div>
<div className="mb-3">
  <label className="form-label">Password</label>
  <input type="password" className="form-control" placeholder="••••••••••" id="Password" 
  name="Password"
  onChange={(e)=>{handleChange(e);ConfirmPassword()}}
  value={data.password}
  required
  />
</div>
<div className="mb-3">
  <label className="form-label">Confirm Password</label>
  <input type="password" className="form-control"  onChange={ConfirmPassword} id="ConfirmPassword" placeholder="••••••••••"/>
</div>
{ warning ===1 &&
  <div className="alert alert-warning alert-dismissible fade show" role="alert">
  {warningText}

  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
}
{ AccountCreated===1 && <div className="alert alert-info alert-dismissible fade show" role="alert">
  <strong>Congratulations !</strong> Account created successfully.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

</div> }
<div className='d-flex justify-content-between'>
<span className="SignIn-Link" onClick={()=>Flip()}>Already Have Account?</span>
<button type="button" className="btn btn-primary"
disabled={disabled} onClick={CreateAccount}
>SignUp</button>
</div>
      </form>      
    </div>
  </div>
    </div>}
    { FlipCard===1 &&   <div className='SignIn-Card-back'>
    <div className='container-fluid'>
    <div className='row'>
      <h1 style={{'text-align':'center'}}>SigIn</h1>
    </div>
    <div className='row'>
      <form>

      <div className="mb-3">
  <label className="form-label">Email address</label>
<input type="email" className="form-control" placeholder="name@example.com" name="Email" value={SignInData['Email']} onChange={SignInDataHandle} />
</div>
<div className="mb-3">
  <label className="form-label">Password</label>
  <input type="password" className="form-control" placeholder="••••••••••" name="Password" value={SignInData['Password']} onChange={SignInDataHandle}/>
</div>
{ LoginedFailed===1 && <div className="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Invalid !</strong> credentials entered.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
<div className='d-flex justify-content-between'>
<span className="SignIn-Link" onClick={()=>Flip()}>Did'nt Have an Account?</span>
<button type="button" className="btn btn-primary" onClick={SignIn}>SignIn</button>
</div>
      </form>
      
      
    </div>
  </div>
    </div>}
</div>
 </div>
  </div>
 </div>
    </div>
   </div>
    </div>
    </>
  )
}
