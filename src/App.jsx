import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/nav/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Detail from "./component/prodDetail/detail";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="container-fluid p-0 m-0">
                    <Navbar />
                    <Routes>
                        <Route exact="true" path="/" element={<Home />} />
                        <Route exact path="/detail" element={<Detail />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;