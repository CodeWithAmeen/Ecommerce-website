// src/components/ProductCard.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CSS/Cards.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <p className="product-brand">{product.brand}</p>
        <p className="product-title">{product.title}</p>
        <p className="product-price">${product.price}</p>
        <div className="product-rating">
          {'⭐'.repeat(product.rating)} {product.rating}
        </div>
        <div className="button-container">
          <button className="add-to-cart-button">
            <i className="fa fa-shopping-cart"></i> Shop Now
          </button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;