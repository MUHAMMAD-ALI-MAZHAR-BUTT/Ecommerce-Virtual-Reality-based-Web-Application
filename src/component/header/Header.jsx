import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bg from '../../asset/video/bg.mp4';
import Button from '@mui/material/Button';

const btnStyle = {
    position: 'absolute',
    zIndex: '1',
    
}

const Header = () => {
    return (
        <>
            <div className="row justify-content-center align-items-center p-0 m-0 ">
                <video className="w-100 p-0" style={{ height: '85vh' }} autoPlay loop muted >
                    <source src={bg} type="video/mp4" />
                    This browser doesn't support video tag.
                </video>

                <div className="text-center" style={btnStyle}>
                    <Button variant="contained" size="large" className="w-25" style={{fontFamily: 'Merriweather, serif', background: 'rgb(255,106,0)'}}>Enter the MetaMart!</Button>
                </div>
            </div>
        </>
    );
}

export default Header;