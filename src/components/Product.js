// Products.js
import React from 'react';
import backgroundImage from '../assets/product.png';
import './css/Product.css'; // Impor file CSS
import ProductContent from './ui/Productcontent';

function Products ()  {
    return (
    <div>
      <div 
      className="product-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ProductContent/> 
        
        
      </div>
      
    </div>
    );
};

export default Products;