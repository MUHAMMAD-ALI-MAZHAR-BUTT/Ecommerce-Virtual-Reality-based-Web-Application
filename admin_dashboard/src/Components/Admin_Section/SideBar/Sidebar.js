import React from 'react'
import {motion} from "framer-motion"
import { NavLink } from 'react-router-dom';
import SidebarData from "./SidebarData"
import Header from '../Header/Header';
import "../../../styles/Admin_Section/SideBar/Sidebar.css"
import { useState ,useEffect} from 'react';
const Sidebar=({children})=>{
    useEffect(() => {
        window
        .matchMedia("(min-width: 768px)")
        .addEventListener('change', ()=>{SetToogle(false)});
      }); 
   const [isOpenToogle,SetToogle]=useState("false")
    function ToogleFunction()
    {
       isOpenToogle===true?SetToogle(false):SetToogle(true);
    }

    return(
        <>    
          <div className='d-flex flex-row bd-highlight '>
            <motion.div className='SideNavbar  p-0 bd-highlight' animate={{width:isOpenToogle?"290px":"55px",
         transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },}}>
                <div className='SideBarBannerSection Section1 d-flex flex-row '> 
                <i className="fas fa-user-cowboy"></i>
                  {isOpenToogle &&  <h6 className='BannerTitle ms-4'>Metaverse Mart</h6>}
                    <i className='ToogleButton fa-solid fa-bars pt-3 ms-md-3 ms-2'
                    onClick={ToogleFunction}
                    ></i>
                </div>
                <hr className='bold my-1'/>
<div className='SideBarBodySection Section2 '>
{SidebarData.map((item,index)=>(
                <NavLink to={item.path} className="SideBarItems  d-flex flex-row "  key={index}>
                    <i className={`${item.Icon} SideBarItemsIcons ms-2 ms-sm-3 my-2 `}></i>
            {isOpenToogle && <h6 className="SideBarItemsText ms-1 ms-sm-3 my-2  ">{item.name}</h6>}
                </NavLink> ))}
</div>
            </motion.div>
            <motion.div className='BodySection bd-highlight '>
                <div className="container-fluid">
             <div className="row Header">
<Header/>
             </div>
<div className="row mainSection">
{children}
</div>
             </div>
        
         </motion.div>
          </div>
</>
    );
}
export default Sidebar;