import {React,useState} from 'react'
import "../../styles/Admin_Section/AdminPages/ProfileSetting.css"
export default function ProfileSetting() {
  const[Status_UserName_Message,Status_User_Name_Message]=useState("");
  const[StatusColor,SetStatusColor]=useState("");
  const[Status_MatchPassword_Message,Set_Status_MatchPassword_Message]=useState("");
  const[CheckPasswordColor,SetCheckPasswordColor]=useState("");
  const[UserData,SetData]=[{
    UserName:"",
    Email:"",
    OldPassword:"",
    NewPassword:""
  }]
  function myFunction(argument) {
    var x = document.getElementById(argument);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function ValidateUserName(e)
  {
    if(/^[a-zA-Z\s.,]+$/.test(e.target.value)===false)
    {
      Status_User_Name_Message("Invalid");
      SetStatusColor("red")
    }
    else{
      Status_User_Name_Message("Valid");
      SetStatusColor("blue")
    }
  }
  function CheckPassword(e)
  {
 if(e.target.value===document.getElementById("NewInputPassword").value)
 {
  Set_Status_MatchPassword_Message("fa-solid fa-square-check")
  SetCheckPasswordColor("blue")
 }
 else{
  Set_Status_MatchPassword_Message("fa-sharp fa-solid fa-square-xmark")
  SetCheckPasswordColor("red");
 }
  }
  return (
  <>
<div className="container-fluid ">
  <div className='row pt-4  '>
 <div className='col-md-8 ms-auto me-auto '>
  <div className="row text-center">
   <h3>Profile Setting</h3>
  </div>
  <div className="row  Body-Section px-5">
  <form className="px-0">
 <span className="Label">Enter UserName :</span>
  <div className='form-inputs d-flex '>
  <i className='fa fa-user field-Icon pt-2 '></i>
  <input type="text" class="form-control UserName"  
placeholder='Enter User Name ' name="UserName" onChange={ValidateUserName}/>
 <div className="Status px-sm-3 pt-1" style={{color: `${StatusColor}`}}>{Status_UserName_Message}</div>
  </div>
 
  <span className="Label">Enter Email : </span>
  <div className='form-inputs d-flex '>
  <i className='fa fa-envelope field-Icon pt-2 '></i>
  <input type="email" class="form-control Email" id="InputEmail1" 
placeholder='ali123@gmail.com'  disabled />
  </div>
  <span className="Label">Enter Old Password : </span>
  <div className='form-inputs d-flex '>
  <i className='fa fa-key field-Icon pt-2 '></i>
  <input type="password" class="form-control OldPassword" id="OldInputPassword" required
placeholder='Enter Old Password' name="OldPassword"/>
<div className="Status px-sm-3 pt-1" style={{color: `${StatusColor}`}}>{Status_UserName_Message}</div>
  </div>
  <input type="checkbox" onClick={()=>myFunction("OldInputPassword")} /><span className="ms-2 TooglePassword">Show Password</span>
<div>  <span className="Label">Enter New Password</span></div>
  <div className='form-inputs d-flex '>
  <i className='fa fa-key field-Icon pt-2 '></i>
  <input type="password" class="form-control NewPassword" id="NewInputPassword" required
placeholder='Enter New Password' name="NewPassword" />
  </div>
  <input type="checkbox" onClick={()=>myFunction("NewInputPassword")} /><span className="ms-2 TooglePassword">Show Password</span>

 <div> <span className="Label">Re-enter New Password</span></div>
  <div className='form-inputs d-flex '>
  <i className='fa fa-key field-Icon pt-2 '></i>
  <input type="password" class="form-control confirmPassword" required id="ConfirmInputPassword" name="ConfirmPassword" onChange={CheckPassword}
placeholder='Re-enter New Password'/>
<div className="Status px-sm-3 pt-1" style={{color: `${CheckPasswordColor}`}}>
<i class={`${Status_MatchPassword_Message}`}></i>
</div>
  </div>
  <input type="checkbox" onClick={()=>myFunction("ConfirmInputPassword")}/><span className="ms-2 TooglePassword">Show Password</span>
<div className='row mt-1'>
 <div className="col d-flex justify-content-center "><button type="reset" className='resetButton'>Reset</button></div>
 <div className="col d-flex justify-content-center "><button type="submit" className='submitButton' >Submit</button></div>
</div>
 </form>
  </div>
 </div>
  </div>
</div>
  </>
  )
}
