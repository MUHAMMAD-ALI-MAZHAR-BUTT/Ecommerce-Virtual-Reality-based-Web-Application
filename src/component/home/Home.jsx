import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FAQ from "../faq/FAQ";
import Header from '../header/Header';
import ProdSec from "../prodSec/ProdSec";


const Home = () => {
    return (
        <>
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
        </>
    );
}

export default Home;