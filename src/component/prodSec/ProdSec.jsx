import React from "react";
import Card from "./Card";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';

const ProdSec = () => {
    return (
        <>
            <div className="row justify-content-center p-0 m-0 shadow pb-3">
                <div className="text-center my-3" id="heading">
                    <p className="h1 text-dark pb-0" style={{ fontFamily: 'Ultra, serif', }}>Products</p>
                    <hr className="fw-bold w-75 " style={{ display: 'inline-block' }} />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <Card />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <Card />
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <Card />
                </div>
                <div className="text-center mt-3">
                    <Button variant="outlined " className="my-3 ">Show More <KeyboardArrowRightIcon /> </Button>
                </div>
            </div>
        </>
    );
}

export default ProdSec;