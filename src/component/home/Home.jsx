import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FAQ from "../faq/FAQ";
import Header from '../header/Header';
import ProdSec from "../prodSec/ProdSec";
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";


const Home = () => {
    return (
        <>
        <Navbar/>
            <div className="row p-0 m-0">
                <div className="col-12 p-0">
                    <Header />
                </div>
                <div className="col-12 p-0">
                    <ProdSec />
                </div>
                <div className="col-12 p-0">
                    <FAQ />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Home;