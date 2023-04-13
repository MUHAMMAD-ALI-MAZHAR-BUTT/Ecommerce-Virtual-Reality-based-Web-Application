import React from 'react'
import "../CSS/Pages/Home.css"
// import ProductCard from "./ProductsCard";
import BannerCarousel from "./BannerCarousel"
import { useState, useEffect } from 'react';
import ProductsList from './ProductList';
export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {

    try {
      const response = await fetch("http://localhost:8081/api/products");
      const data = await response.json();
      console.log('in home page products',data);
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container-fluid  px-0 mx-0'>
      <div className='row  px-0 mx-0 mb-5'>
        <BannerCarousel />
      </div>
      <div className='row mt-2'>
        <div className="container-fluid">
          <div className="row">
            <div className="products">
            <ProductsList products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
