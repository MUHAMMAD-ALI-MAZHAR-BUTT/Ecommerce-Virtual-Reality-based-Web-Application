
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Detail.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import img from '../../asset/img/1.jpg';
import Navbar from "../nav/Navbar";
import Footer from "../footer/Footer";



const favStyle = {
    display: 'inline-block',
    padding: '10px',
}

const Detail = () => {

    return (
        <>
        <Navbar/>
            <div className="row p-0 m-0">
                <div className="Prodheading my-4 text-center mx-auto">
                    <p className="h1 shadow mx-auto  p-4 my-0" style={{ fontFamily: 'Monoton, cursive', color: 'rgb(255,106,0)', fontWeight: '500' }}>Product Details</p>
                </div>

                <div className="col-lg-5 col-md-4 col-12 text-center py-5">
                    <div className="card shadow border-0  my-auto float-md-end " style={{ width: '80%'}}>
                        <div className="card-image p-3">
                            <img src={img} className="img-fluid" alt="..." />
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-8 col-12 py-5">
                    <div className="card shadow border-0  my-auto ps-4 mx-auto" style={{ width: '80%', float: 'left', fontFamily: 'Noto Serif, serif', }}>

                        <div className="productDetails">
                            <p className="mb-0 py-4 h2 card-title">product title here</p>
                            <p className="pb-3 h3 " style={{ fontFamily: 'Tinos, serif', fontWeight: '550' }}>Price: <span style={{ fontFamily: 'Anton, sans-serif', }}>$4000 </span> </p>
                            <p className="h3 pb-3" style={{ fontFamily: 'Tinos, serif', fontWeight: '550' }}>Category: <span className="h4" style={{ fontFamily: 'Anton, sans-serif', }}> both </span> </p>
                            <details>
                                <summary className="h3" style={{ fontFamily: 'Tinos, serif', fontWeight: '550' }}>Description:</summary>
                                <p style={{ fontFamily: 'Merriweather, serif', lineHeight: '2', wordSpacing: '2' }}> loremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsumloremipsum </p>
                            </details>
                        </div>

                        <div className="my-3 row">
                            <div className="col-2 text-center">
                                <div className="card border-0 shadow-sm " style={favStyle}>
                                    <FavoriteBorderIcon fontSize="large" />
                                </div>
                            </div>
                            <div className="col-9 text-center">
                                <button className="btn border-0 shadow-sm cartBtn w-100 text-white"> Add To Cart <AddShoppingCartIcon /> </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
};

export default Detail;