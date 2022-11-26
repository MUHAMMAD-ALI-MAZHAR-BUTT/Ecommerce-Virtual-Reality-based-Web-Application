import React from 'react'
import SignIn from '../Components/SignIn/SignIn';
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import Home from './Home';
function Main() {
  const user=localStorage.getItem('token');
  return (
   <BrowserRouter>
   <Routes>
    {user &&  <Route path="/Dashboard" element={<Home/>}/>}
    <Route path="/login" exact element={ <SignIn/>} />
    <Route path="/" exact element={<Navigate replace to="/login"/>} />
   </Routes>
   </BrowserRouter>
  )
}
export default Main;