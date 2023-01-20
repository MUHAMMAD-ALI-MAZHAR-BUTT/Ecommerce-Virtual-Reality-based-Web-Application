import React from 'react'
import { useEffect } from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import "../../CSS/Component/NavBar/NavBar.css"
function NavBar() {
 const navigate=useNavigate();
 const auth=localStorage.getItem("jwttken");
   const [ThemeMode,Set_Mode]=useState("fa-sharp fa-solid fa-sun");
   const [SearchField,SetSearchField]=useState(false);
   const ChangeMode=()=>
    {
        if(ThemeMode === "fa-sharp fa-solid fa-sun")
        {
            Set_Mode("fa-solid fa-moon")
        }else
        {
            Set_Mode("fa-sharp fa-solid fa-sun")
        }
    } 
 function ShowSearchField()
 {
    if(SearchField===true)
    {
        SetSearchField(false);
    }
    else{
        SetSearchField(true);
    }
 }
 function LogOut()
 {
  localStorage.clear("jwttken");
  navigate("/SignUp");
 }
  return (<>
<nav className="navbar navbar-expand-lg NavBar-Cover navbar-dark px-sm-3 ">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand NavBar-Items "><h2 className="BannerTittle">MetaMart</h2></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">       
        <li className="nav-item dropdown NavBar-Items">
        <NavLink className="nav-link NavBar-Items" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Outerwear
          </NavLink>
          <ul className="dropdown-menu">
          <div className='container-fluid Outerwear-Dropdown-Item d-flex px-3'>
    <div className="row">
        <div className="col d-flex flex-column">
            <li><h5 className='OuterWear-Heading my-3 dropdown-item'>For Men</h5></li>
           <li> <NavLink to="/LeathericMale" className="Man-products-Link dropdown-item">Leather Jackets</NavLink></li>
           <li> <NavLink to="/SweatMale" className="Man-products-Link dropdown-item">Sweat jackets</NavLink></li>
            <li><NavLink to="/PufferMale" className="Man-products-Link dropdown-item">Puffer Jackets</NavLink></li>
        </div>
    </div>
    <li className="dropdown-item' vertical-Line mt-5 mx-sm-3"></li>
    <div className="row">
     <div className="col d-flex flex-column">
           <li><h5 className='OuterWear-Heading my-3 dropdown-item'>For Women</h5></li>
           <li> <NavLink to="/LeathericFemale" className="Women-products-Link dropdown-item">Leather Jackets</NavLink></li>
           <li> <NavLink to="/SweatFemale" className="Women-products-Link dropdown-item">Sweat jackets</NavLink></li>
            <li><NavLink to="/PufferFemale" className="Women-products-Link dropdown-item">Puffer Jackets</NavLink></li>
        </div>
    </div>
</div>

          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/VRMode" className="nav-link NavBar-Items" >VR Mode</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to="/Bespoke" className="nav-link NavBar-Items" >Bespoke</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/FittingSizeSuggestion" className="nav-link NavBar-Items" >Size Suggestion</NavLink>
        </li>
               
        <li className="nav-item dropdown NavBar-Items">
        <NavLink className="nav-link NavBar-Items" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Pages
          </NavLink>
          <ul className="dropdown-menu">
          <div className='container-fluid  d-flex px-0 mx-0'>
    <div className="row px-0 mx-0 pageslinks">
        <div className="col d-flex flex-column p-0 m-0 pageslinks">
           <li> <NavLink to="/ContactUs" className="ps-2 mx-0 WebSite-Pages-Link dropdown-item">Contact US</NavLink></li>
           <li> <NavLink to="/AboutUs" className="ps-2 mx-0 WebSite-Pages-Link dropdown-item">About US</NavLink></li>
            <li><NavLink to="/FAQS" className="ps-2 mx-0 WebSite-Pages-Link dropdown-item">FAQS</NavLink></li>
            <li><NavLink to="/Team" className="ps-2 mx-0 WebSite-Pages-Link dropdown-item">Team</NavLink></li>
            <li><NavLink to="/Services" className="ps-2 mx-0 WebSite-Pages-Link dropdown-item">Services</NavLink></li>
            <li><NavLink to="/PrivacyPolicy" className="ps-2 mx-0 WebSite-Pages-Link dropdown-item">Privacy Policy</NavLink></li>
        </div>
    </div>
</div>
          </ul>
        </li>
        <li className="nav-item pt-2 ps-2" onClick={ShowSearchField}>
        <i class="fa-solid fa-magnifying-glass Magnifying-Glass-icon"></i>
        </li>
        <li className="nav-item pt-2 ps-md-3" onClick={ChangeMode}>
        <i className={`${ThemeMode} Mode NavBar-Items`} />
        </li>
        <li className="nav-item dropdown ps-2 pt-1">
        <div id="google_translate_element"></div>
        </li>
        <li className="nav-item dropdown ps-2">
          <NavLink className="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-dollar-sign Currency-Conversion NavBar-Items"></i>
          </NavLink>
          <ul className="dropdown-menu">
            <li className='d-flex py-1'><img src="Images/Flags/Pakistan.png" className='Flags-Icons ms-2 ' title="Pakistan " alt="Pakistan Flag"/>
            <h6 className='ps-2 pt-1'>Pakistan</h6></li>
            <li className='d-flex py-1'><img src="Images/Flags/India.png" className='Flags-Icons ms-2 ' title="India" alt="India Flag"/>
            <h6 className='ps-2 pt-1'>India</h6></li>
            <li className='d-flex py-1'><img src="Images/Flags/France.png" className='Flags-Icons ms-2 ' title="France" alt="France Flag"/>
            <h6 className='ps-2 pt-1'>France</h6></li>
          </ul>
        </li>
        <li className="nav-item pt-2 ps-2" >
        50$ <i class="fa-solid fa-cart-shopping Shopping-Cart"></i>
        </li>
        {
          auth?
          // <li className="nav-item mx-sm-3 ">
          // <button className="mb-5" onClick={LogOut}>Logout</button>
          //  </li>
                   <li className="nav-item dropdown NavBar-Items pe-md-4 ps-md-2">
                   <NavLink className="nav-link NavBar-Items" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                     </NavLink>
                     <ul className="dropdown-menu a">
                     <div className='container d-flex px-0 mx-0'>
               <div className="row px-0 mx-0 ">
                   <div className="col d-flex flex-column p-0 m-0 ">
                      <li> <NavLink to="/Dashboard" className="ps-2 mx-0 ProfileLink dropdown-item">Dashboard</NavLink></li>
                       <li><NavLink to="/ProfileSetting" className="ps-2 mx-0 ProfileLink dropdown-item">Profile Setting</NavLink></li>
                       <li><div className="ps-2 mx-0 ProfileLink dropdown-item" onClick={LogOut}>Log Out</div></li>
                   </div>
               </div>
           </div>
                     </ul>
                   </li>
        :
        <>
        <li className="nav-item mx-sm-3 mt-1">
         <NavLink to="/SignUp" type="button" className="btn btn-primary">SIGN UP</NavLink>
        </li>
        </>
        }
      </ul>
    </div>
  </div>
</nav>
{SearchField && 
<div className='container-fluid SearchFieldSection py-2 px-sm-5'>
<div className='row'>
    <div className='col-md-6  offset-md-3'>
    <div class="input-group mb-2 ">
    <div class="input-group-prepend ">
      <div class="input-group-text  p-3">  <i class="fa-solid fa-magnifying-glass"></i></div>
    </div>
    <input type="text" class="form-control" placeholder=" Search here"/>

  </div>
    </div>
</div>

</div>
}
</>
  )
}

export default NavBar