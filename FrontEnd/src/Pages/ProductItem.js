import React from 'react';
import {useState} from 'react';
import "../CSS/Pages/Product.css"

const ProductItem = ({ product }) => {
  const [BuyProduct,setBuyProduct]=useState("");
function BuyProductFunction()
{
  BuyProduct===""?setBuyProduct("clicked"):setBuyProduct("");
}
  return (
    <>
    <div className="container my-1">
  <div className="row">
  <div className="col-4">
  <div className="wrapper">
  <div className="container">
    <div className="top"></div>
    <div className={`bottom ${BuyProduct}`}>
      <div className="left">
        <div className="details">
          <h6>Chair</h6>
          <p>£250</p>
        </div>
        <div className="buy" onClick={BuyProductFunction}>
        <i className="fa-solid fa-cart-plus fa-2x fa-beat-fade" style={{color: '#005eff'}}></i>
          </div>
      </div>
      <div className="right">
        <div className="done"><i className="material-icons">done</i></div>
        <div className="details">
          <h1>Chair</h1>
          <p>Added to your cart</p>
        </div>
        <div className="remove">
        <i className="fa-solid fa-xmark " style={{color: "#ff0505"}}></i>
          </div>
      </div>
    </div>
  </div>
  <div className="inside">
    <div className="icon">
    <i className="material-icons fa-solid fa-fade fa-2x fa-circle-info"></i>
      </div>
    <div className="contents">
      <table>
        <tr>
          <th>Width</th>
          <th>Height</th>
        </tr>
        <tr>
          <td>3000mm</td>
          <td>4000mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
        <tr>
          <th>Something</th>
          <th>Something</th>
        </tr>
        <tr>
          <td>200mm</td>
          <td>200mm</td>
        </tr>
      </table>
    </div>
  </div>
</div>
      {/* <div className="card"> 
        <img src={product.thumbnailImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="row ">
            <div className="col">
           <h4> {product.price}$</h4>
            </div>
            <div className="col">
        <button type="button" className="addToCart px-md-4 py-md-2">Add to Cart</button>
            </div>
          </p>
           </div>
      </div> */}
    </div>
  </div>
  </div>
    </>
    
    
  );
};

export default ProductItem;
