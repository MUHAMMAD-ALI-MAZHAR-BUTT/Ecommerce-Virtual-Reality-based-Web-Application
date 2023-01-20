import './App.css';
import AboutUs from './Pages/AboutUs'
import FAQS from './Pages/FAQS'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import ContactUs from './Pages/ConactUs'
import Footer from './Components/Footer/Footer';
import Bespoke from './Pages/Bespoke';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Team from './Pages/Team';
import VRMode from './Pages/VRMode';
import FittingSizeSuggestion from "./Pages/FittingSizeSuggestion"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUpInSection/SignUp';
import LeathericFemale from './Pages/FemalesJackets/LeathericFemale'
import SweatFemale from './Pages/FemalesJackets/SweatFemale'
import PufferFemale from './Pages/FemalesJackets/PufferFemale'
import LeathericMale from './Pages/MaleJackets/LeathericMale'
import SweatMale from './Pages/MaleJackets/SweatMale'
import PufferMale from './Pages/MaleJackets/PufferMale'
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [UserAccount,setUserAccount]=useState(JSON.parse(localStorage.getItem("jwttken")));
  const [Username,setUsername]=useState("");
  const [Useremail,setEmail]=useState("");
useEffect(()=>{
  if(UserAccount){
    setUsername(UserAccount['response']);
    setEmail(UserAccount['Email']);
  }
})
  return (
  <>
  <BrowserRouter>
  <NavBar/>
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Bespoke" element={<Bespoke username={Username} useremail={Useremail} />} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/FittingSizeSuggestion" element={<FittingSizeSuggestion/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/FAQS" element={<FAQS/>} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/LeathericMale" element={<LeathericMale/>} />
        <Route path="/SweatMale" element={<SweatMale/>} />
        <Route path="/PufferMale" element={<PufferMale/>} />
        <Route path="/PufferFemale" element={<PufferFemale/>} />
        <Route path="/SweatFemale" element={<SweatFemale/>} />
        <Route path="/LeathericFemale" element={<LeathericFemale/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/VRMode" element={<VRMode/>} />
        <Route path="/Services" element={<Services/>} />
    </Routes>
  <Footer/>
</BrowserRouter>
  </>
  );
}

export default App;
