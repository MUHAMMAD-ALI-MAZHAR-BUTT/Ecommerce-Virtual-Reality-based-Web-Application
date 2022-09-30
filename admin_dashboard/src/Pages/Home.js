import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Sidebar from "../Components/Admin_Section/SideBar/Sidebar"
import Analytics from "./Admin_Pages/Analytics/Analytics"
// import GeneralAnalytics from "./Admin_Pages/Analytics/GeneralAnalytics"
// import PaymentAnalytics from "./Admin_Pages/Analytics/PaymentAnalytics"
// import ProductAnalytics from "./Admin_Pages/Analytics/ProductsAnalytics"
// import AddProducts from "./Admin_Pages/AddProducts"
// import CompletedOrders from "./Admin_Pages/CompletedOrders"
// import CompletedProductRequests from "./Admin_Pages/CompletedProductRequests"
import Customers from "./Admin_Pages/Customers"
import Dashboard from "./Admin_Pages/Dashboard"
import Orders from "./Admin_Pages/Orders"
import NewsSection from "./Admin_Pages/NewsSection"
import Products from "./Admin_Pages/Products"
// import GeneralFeedback from "./Admin_Pages/GeneralFeedback"
import History from "./Admin_Pages/History"
// import PendingOrder from "./Admin_Pages/PendingOrder"
// import PendingProductRequests from "./Admin_Pages/PendingProductRequests"
// import ProductFeedback from "./Admin_Pages/ProductFeedback"
import ProfileSetting from "./Admin_Pages/ProfileSetting"
import Feedbacks from "./Admin_Pages/Feedbacks"
import ProductRequests from "./Admin_Pages/ProductRequests"
// import ViewProduct from "./Admin_Pages/ViewProducts"
import "../styles/Home.css"
export default function Home() {
  return (
<BrowserRouter>
<Sidebar>
  <Routes>
  <Route path="/Dashboard" element={<Dashboard/>}/>
<Route path="/Products" element={<Products/>}/>
<Route path="/Orders" element={<Orders/>}/>
<Route path="/Customers" element={<Customers/>}/>
<Route path="/Analytics" element={<Analytics/>}/>
<Route path="/NewsSection" element={<NewsSection/>}/>
<Route path="/History" element={<History/>}/>
<Route path="/ProductRequests" element={<ProductRequests/>}/>
<Route path="/Feedbacks" element={<Feedbacks/>}/>
<Route path="/ProfileSetting" element={<ProfileSetting/>}/>
{/* <Route path="/ViewProduct" element={<ViewProduct/>}/> */}
{/* <Route path="/GeneralAnalytics" element={<GeneralAnalytics/>}/>
<Route path="/PaymentAnalytics" element={<PaymentAnalytics/>}/>
<Route path="/ProductAnalytics" element={<ProductAnalytics/>}/> */}
{/* <Route path="/AddProducts" element={<AddProducts/>}/>
<Route path="/CompletedOrders" element={<CompletedOrders/>}/>
<Route path="/CompletedProductRequests" element={<CompletedProductRequests/>}/> */}

{/* <Route path="/GeneralFeedback" element={<GeneralFeedback/>}/> */}

{/* <Route path="/PendingOrder" element={<PendingOrder/>}/>
<Route path="/PendingProductRequests" element={<PendingProductRequests/>}/>
<Route path="/ProductFeedback" element={<ProductFeedback/>}/> */}
  </Routes>
  </Sidebar>
</BrowserRouter>
  )
}
