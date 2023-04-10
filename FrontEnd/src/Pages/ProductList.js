import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
