import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../../styles/Admin_Section/SideBar/SidebarMenuSubRoutes.css"
export default function SidebarMenuSubRoutes({item,isOpenToogle}) {
    const [ToogleMenu,SetToogleMenu]=useState(false);
    function ToogleMenuFunction()
    {
        ToogleMenu===false?SetToogleMenu(true):SetToogleMenu(false);
    }
  return (
    <>
   <div className="Menu" onClick={ToogleMenuFunction}>
    <div className="Menu-Items d-flex flex-row">
    <i className={`${item.Icon} SideBarItemsIcons ms-2 ms-sm-3 my-2 `}></i>
    {isOpenToogle && <h6 className="SideBarItemsText ms-1 ms-sm-3 my-2  ">{item.name}</h6>}
    <i class="fa-sharp fa-solid fa-caret-down DownArrow  ms-1 pt-2"></i>
    </div>
    </div>  
{ToogleMenu &&     <div className="MenuItemsSections">
    {item.subRoutes.map((SubRoutes,index)=>{
       return   <NavLink to={SubRoutes.path} className="SideBarItems  d-flex flex-row  ms-3"  key={index}>
       <i className={`${SubRoutes.Icon} SubRouteIcons ms-2 ms-sm-3 my-2 `}></i>
{isOpenToogle && <h6 className="SubRouteText ms-1 ms-sm-2 my-2  ">{SubRoutes.name}</h6>}
   </NavLink> 
   })}
  
    </div>}
    </>        
  )
}
