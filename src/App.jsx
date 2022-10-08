import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/nav/Navbar";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import Detail from "./component/prodDetail/detail";
import Check from "./component/Unity/Check";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="container-fluid p-0 m-0">
                    <Navbar />
                    <Routes>
                        <Route exact="true" path="/" element={<Home />} />
                        <Route exact path="/detail" element={<Detail />} />
                        <Route exact path="/check" element={<Check />} />

                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
       
    );
}

export default App;