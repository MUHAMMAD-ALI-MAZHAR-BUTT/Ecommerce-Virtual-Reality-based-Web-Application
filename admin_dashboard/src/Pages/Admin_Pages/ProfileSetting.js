import { React, useState, useEffect } from 'react'
import "../../styles/Admin_Section/AdminPages/ProfileSetting.css"
import axios from 'axios';
import _ from 'lodash';



export default function ProfileSetting() {
  const [Status_FirstName_Message, Status_First_Name_Message] = useState("");
  const [StatusFirstNameColor, SetStatusFirstNameColor] = useState("");
  const [Status_LastName_Message, Status_Last_Name_Message] = useState("");
  const [StatusLastNameColor, SetStatusLastNameColor] = useState("");
  const [Status_MatchPassword_Message, Set_Status_MatchPassword_Message] = useState("");
  const [CheckPasswordColor, SetCheckPasswordColor] = useState("");
  const [UserData, SetData] = useState({});
  const [newPassword,setnewPassword]=useState("");
  const [confirmNewPassword,setConfirmNewPassword]=useState("");
  const [isValidFirstName,toggleFirstNameValidity]=useState(true);
  const [isValidLastName,toggleLastNameValidity]=useState(true);
  const [isValidPassword,togglePasswordValidity]=useState(false);


  function myFunction(argument) {
    var x = document.getElementById(argument);
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function ValidateFirstName(e) {
    if (e.target.value.trim() === '') {
      Status_First_Name_Message("");
      toggleFirstNameValidity(false);
      return;
    }
    if (/^[a-zA-Z\s.,]+$/.test(e.target.value) === false) {
      Status_First_Name_Message("Invalid");
      SetStatusFirstNameColor("red");
      toggleFirstNameValidity(false);
    }
    else {
      Status_First_Name_Message("Valid");
      SetStatusFirstNameColor("blue");
      toggleFirstNameValidity(true);
      const dummyUser = { ...UserData };
      dummyUser.firstName = e.target.value;
      SetData(dummyUser);
    }
  }
  function ValidateSecondName(e) {
    if (e.target.value.trim() === '') {
      Status_Last_Name_Message("");
      toggleLastNameValidity(false);
      return;
    }
    if (/^[a-zA-Z\s.,]+$/.test(e.target.value) === false) {
      Status_Last_Name_Message("Invalid");
      SetStatusLastNameColor("red");
      toggleLastNameValidity(false);
    }
    else {
      Status_Last_Name_Message("Valid");
      SetStatusLastNameColor("blue");
      toggleLastNameValidity(true);
      const dummyUser = { ...UserData };
      dummyUser.lastName = e.target.value;
      SetData(dummyUser);
    }
  }
  function CheckPassword(e) {
    if (e.target.value === document.getElementById("NewInputPassword").value) {
      Set_Status_MatchPassword_Message("fa-solid fa-square-check")
      SetCheckPasswordColor("blue");
      togglePasswordValidity(true);
    }
    else {
      Set_Status_MatchPassword_Message("fa-sharp fa-solid fa-square-xmark")
      SetCheckPasswordColor("red");
      togglePasswordValidity(false);

    }
    setConfirmNewPassword(e.target.value);
  }

  async function editProfile(e) {
    e.preventDefault();
    console.log('UserData', UserData)
    console.log('password credenials',newPassword,confirmNewPassword);
    UserData.password=newPassword;

    try {
      const response=await axios.put('http://localhost:8081/api/users/profileUpdate',UserData);
      console.log('updated response',response.data);
      SetData(_.pick(response.data,['email','_id','firstName','lastName','password']));
    } catch (error) {
      console.log('profile updation failed');
      
    }
  }


  async function getUser() {
    try {
      const response = await axios.get('http://127.0.0.1:8081/api/users', {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        }
      });
      console.log('in profile settings response is', response);
      SetData(_.pick(response.data,['email','_id','firstName','lastName','password']));
    } catch (error) {
      console.log('in profile settings error is', error);
    }

  }
  useEffect(() => {
    getUser();

  }, [])

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
                <span className="Label">First Name:</span>
                <div className='form-inputs d-flex '>
                  <i className='fa fa-user field-Icon pt-2 '></i>
                  <input type="text" class="form-control UserName"
                    placeholder='Enter User Name ' name="UserName" value={UserData.firstName} onChange={ValidateFirstName} />
                  <div className="Status px-sm-3 pt-1" style={{ color: `${StatusFirstNameColor}` }}>{Status_FirstName_Message}</div>
                </div>

                <span className="Label">Last Name :</span>
                <div className='form-inputs d-flex '>
                  <i className='fa fa-user field-Icon pt-2 '></i>
                  <input type="text" class="form-control UserName"
                    placeholder='Enter User Name ' name="UserName" value={UserData.lastName} onChange={ValidateSecondName} />
                  <div className="Status px-sm-3 pt-1" style={{ color: `${StatusLastNameColor}` }}>{Status_LastName_Message}</div>
                </div>

                <span className="Label">Email : </span>
                <div className='form-inputs d-flex '>
                  <i className='fa fa-envelope field-Icon pt-2 '></i>
                  <input type="email" class="form-control Email" id="InputEmail1"
                    value={UserData.email} placeholder='ali123@gmail.com' disabled />
                </div>

                {/* <span className="Label">Enter Old Password : </span>
                <div className='form-inputs d-flex '>
                  <i className='fa fa-key field-Icon pt-2 '></i>
                  <input type="password" class="form-control OldPassword" id="OldInputPassword" required
                    placeholder='Enter Old Password' name="OldPassword" />
                  <div className="Status px-sm-3 pt-1" style={{ color: `${StatusColor}` }}></div>
                </div>
                <input type="checkbox" onClick={() => myFunction("OldInputPassword")} /><span className="ms-2 TooglePassword">Show Password</span> */}
                <div>  <span className="Label">Enter New Password</span></div>
                <div className='form-inputs d-flex '>
                  <i className='fa fa-key field-Icon pt-2 '></i>
                  <input type="password" class="form-control NewPassword" id="NewInputPassword" required
                    placeholder='Enter New Password' name="NewPassword" value={newPassword} onChange={(e)=>setnewPassword(e.target.value)} />
                </div>
                <input type="checkbox" onClick={() => myFunction("NewInputPassword")} /><span className="ms-2 TooglePassword">Show Password</span>

                <div> <span className="Label">Re-enter New Password</span></div>
                <div className='form-inputs d-flex '>
                  <i className='fa fa-key field-Icon pt-2 '></i>
                  <input type="password" class="form-control confirmPassword" required id="ConfirmInputPassword" name="ConfirmPassword" onChange={CheckPassword}
                    placeholder='Re-enter New Password' value={confirmNewPassword} />
                  <div className="Status px-sm-3 pt-1" style={{ color: `${CheckPasswordColor}` }}>
                    <i class={`${Status_MatchPassword_Message}`}></i>
                  </div>
                </div>
                <input type="checkbox" onClick={() => myFunction("ConfirmInputPassword")} /><span className="ms-2 TooglePassword">Show Password</span>
                <div className='row mt-1'>
                  <div className="col d-flex justify-content-center "><button type="reset" className='resetButton'>Reset</button></div>
                  <div className="col d-flex justify-content-center "><button type="submit" className='submitButton' onClick={editProfile} disabled={!(isValidFirstName && isValidLastName && isValidPassword)}>Submit</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
