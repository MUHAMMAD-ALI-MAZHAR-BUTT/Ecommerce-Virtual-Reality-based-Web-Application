import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import UserOrders from "./pages/UserOrders";
import Analytics from "./pages/Analytics";
import UserHistories from "./pages/UserHistories";
import UserFeedbacks from "./pages/UserFeedbacks";
import ProfileSetting from "./pages/ProfileSetting";
function App() {
  return (
    <Router>
      <SideBar>
      <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/Users" element={<Users />} />
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/Analytics" element={<Analytics />} />
          <Route exact  path="/UserHistories" element={<UserHistories />} />
          <Route exact path="/UserOrders" element={<UserOrders />} />
          <Route exact path="/UserFeedbacks" element={<UserFeedbacks/>} />
          <Route exact path="/ProfileSettings" element={<ProfileSetting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
        </SideBar> 
    </Router>
  );
}

export default App;
