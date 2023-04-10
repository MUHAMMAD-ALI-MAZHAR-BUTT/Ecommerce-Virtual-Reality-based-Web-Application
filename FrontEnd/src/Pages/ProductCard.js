import React from "react";

const ProductCard = ({ product }) => {
    console.log("yahan ho jay ga ", product);
    return (
        <div class="card" style="width: 18rem;">
            {/* <img src={product.image} alt={product.name} /> */}
            <div class="card-body">
                <h5 class="card-title">{product.name}</h5>
                <p class="card-text">{product.description}</p>
                <p>${product.price}</p>
                <a href="#" class="btn btn-primary">Add to Card</a>
            </div>
        </div>
    );
};

export default ProductCard;
