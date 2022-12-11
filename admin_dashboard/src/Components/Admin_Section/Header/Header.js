import React from 'react'
import "../../../App.css"
import "../../../styles/Admin_Section/Header/Header.css"
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function Header() {
const[ModeIcon,SetModeIcon]=useState("fa-solid fa-moon")
const[ThemeValue,SetThemeValue]=useState("Dark-Mode");
const navigate=useNavigate();
useEffect(()=>{
  document.body.className=ThemeValue;
})
function ChangeMode()
{
    ModeIcon==="fa-solid fa-moon"?SetModeIcon("fa-sharp fa-solid fa-sun"):SetModeIcon("fa-solid fa-moon");
    ThemeValue==="Dark-Mode"?SetThemeValue("light-Mode"):SetThemeValue("Dark-Mode");
}
const LogOut=()=>{ 
  localStorage.removeItem("token");
navigate("/");
window.location.reload();
 console.log("logout");
  alert("Log out");
}
  return (
    <>
      <div className="col-8 pt-1 Heading">Welcome to MetaMart Dashboard</div>
  <div className='col-4  pt-2 d-flex flex-row justify-content-end'>
    <div className="Mode me-md-1" >
    <i className={`${ModeIcon}  Items`} onClick={ChangeMode}></i>
    </div>
    <div className="dropdown1 me-md-1">
  <span className="" data-bs-toggle="dropdown"  aria-expanded="false">
  <i class="fa-solid fa-bell Items"></i>
  </span>
  {/* <ul className="dropdown-menu">
  <li className='dropdown-item'><img src="./images/Header/Pakistan.png" className='Dropdown-Item-Images me-sm-3' alt='Pakistan'/><h6 className="d-inline DropDownText"> Pakistan</h6></li>
    <li className='dropdown-item'><img src="./images/Header/America.png" className='Dropdown-Item-Images me-sm-3' alt='america'/><h6 className="d-inline DropDownText">America</h6></li>
    <li className='dropdown-item'><img src="./images/Header/india.png" className='Dropdown-Item-Images me-sm-3' alt='india'/><h6 className="d-inline DropDownText">India</h6></li>
  </ul> */}
</div>
  <div className="dropdown2 me-md-1">
  <span className="" data-bs-toggle="dropdown"  aria-expanded="false">
    <i className="fa-solid fa-globe Items"></i>
  </span>
  <ul className="dropdown-menu">
  <li className='dropdown-item'><img src="./images/Header/Pakistan.png" className='Dropdown-Item-Images me-sm-3' alt='Pakistan'/><h6 className="d-inline DropDownText"> Pakistan</h6></li>
    <li className='dropdown-item'><img src="./images/Header/America.png" className='Dropdown-Item-Images me-sm-3' alt='america'/><h6 className="d-inline DropDownText">America</h6></li>
    <li className='dropdown-item'><img src="./images/Header/india.png" className='Dropdown-Item-Images me-sm-3' alt='india'/><h6 className="d-inline DropDownText">India</h6></li>
  </ul>
</div>

<div className="dropdown3 me-md-1">
  <span className="" data-bs-toggle="dropdown" aria-expanded="false">
    <i class="fa-solid fa-dollar-sign Items"></i>
  </span>
  <ul className="dropdown-menu">
    <li className='dropdown-item'><img src="./images/Header/Pakistan.png" className='Dropdown-Item-Images me-sm-3' alt='Pakistan'/><h6 className="d-inline DropDownText"> Pakistan</h6></li>
    <li className='dropdown-item'><img src="./images/Header/America.png" className='Dropdown-Item-Images me-sm-3' alt='america'/><h6 className="d-inline DropDownText">America</h6></li>
    <li className='dropdown-item '><img src="./images/Header/india.png" className='Dropdown-Item-Images me-sm-3' alt='india'/><h6 className="d-inline DropDownText">india</h6></li>
  </ul>
</div>
<div className="Mode me-md-1" >
    <i className="fa-solid fa-right-from-bracket Items" onClick={LogOut}></i>
    </div>
  </div>
    </>
  )
}
