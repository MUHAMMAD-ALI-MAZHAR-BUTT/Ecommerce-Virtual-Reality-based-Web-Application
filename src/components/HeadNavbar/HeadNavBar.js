import "../../style/HeadNavbar/HeadNavbar.css";
function HeadNavBar()
{
return(
    <>
<div className="row HeadNavbar py-2">
    <div className="col-8 Header-Text">
Welcome to MetaMart Admin Dashboard Panel
    </div>
    <div className="col-4">   
    <div className="Notifications-Icons">
    <i className="fa-solid fa-bell pe-3 HeaderIcons"></i>
    </div>
    <div className="Language-Conversion pt-0">
      <i className="fa-sharp fa-solid fa-globe pe-3 btn HeaderIcons pt-0 " type="button"
  data-bs-toggle="dropdown" aria-expanded="false"></i>
  <ul className="dropdown-menu py-0">
    <li className="Language-Conversion-Items ps-sm-2">
      <img src="../Images/Header/America.png" alt="America Flag" className="DropDown-Icons pe-sm-2"/>
      English</li>
    <li className="Language-Conversion-Items ps-sm-2">
    <img src="../Images/Header/India.png" alt="India Flag" className="DropDown-Icons pe-sm-2"/>
      India</li>
    <li className="Language-Conversion-Items ps-sm-2">
    <img src="../Images/Header/France.png " alt="France Flag" className="DropDown-Icons pe-sm-2"/>
      France</li>
  </ul>
  </div>
  <div className="Currency-Conversion ">
      <i className="fa-sharp fa-solid fa-dollar-sign pe-3 btn HeaderIcons pt-0" type="button"
  data-bs-toggle="dropdown" aria-expanded="false"></i>
  <ul className="dropdown-menu py-0">
  <li className="Currency-Conversion-Items ps-sm-2">
    <img src="../Images/Header/Pakistan.png" alt="India Flag" className="DropDown-Icons pe-sm-2"/>
      Pakistan</li>
    <li className="Currency-Conversion-Items ps-sm-2">
      <img src="../Images/Header/America.png" alt="America Flag" className="DropDown-Icons pe-sm-2"/>
     Dollar</li>
    <li className="Currency-Conversion-Items ps-sm-2">
    <img src="../Images/Header/India.png" alt="France Flag" className="DropDown-Icons pe-sm-2"/>
      Indian</li>
  </ul>
  </div>
  <div className="Mode">
  <i className="fa-solid fa-moon pe-3 HeaderIcons"></i>
  </div>
    </div>
</div>
    </>
);
}
export default HeadNavBar;