// src/pages/MenswearFormalPage.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CSS/ProductsPages.css'; // Import CSS for styling

const productData = {
  salesAndDiscount: [
    { id: 1, imgSrc: 'images/Beat Studio3.jpg', rating: 4.5, price: '$30.00', discountPrice: '$20.00', title: 'Discounted Product 1' },
    { id: 2, imgSrc: 'images/Beat Studio3.jpg', rating: 4.0, price: '$40.00', discountPrice: '$25.00', title: 'Discounted Product 2' },
    { id: 3, imgSrc: 'images/Beat Studio3.jpg', rating: 4.8, price: '$50.00', discountPrice: '$30.00', title: 'Discounted Product 3' },
    { id: 4, imgSrc: 'images/Beat Studio3.jpg', rating: 3.5, price: '$35.00', discountPrice: '$22.00', title: 'Discounted Product 4' },
    { id: 5, imgSrc: 'images/Beat Studio3.jpg', rating: 4.2, price: '$45.00', discountPrice: '$28.00', title: 'Discounted Product 5' },
  ],
  casualDresses: [
    { id: 6, imgSrc: 'images/Beat Studio3.jpg', rating: 4.5, price: '$30.00', discountPrice: '$20.00', title: 'Discounted Product 1' },
    { id: 7, imgSrc: 'images/Beat Studio3.jpg', rating: 4.0, price: '$40.00', discountPrice: '$25.00', title: 'Discounted Product 2' },
    { id: 8, imgSrc: 'images/Beat Studio3.jpg', rating: 4.8, price: '$50.00', discountPrice: '$30.00', title: 'Discounted Product 3' },
    { id: 9, imgSrc: 'images/Beat Studio3.jpg', rating: 3.5, price: '$35.00', discountPrice: '$22.00', title: 'Discounted Product 4' },
    { id: 10, imgSrc: 'images/Beat Studio3.jpg', rating: 4.2, price: '$45.00', discountPrice: '$28.00', title: 'Discounted Product 5' },
  ],
  casualShirts: [
    { id: 11, imgSrc: 'images/Beat Studio3.jpg', rating: 4.5, price: '$40.00', title: 'Casual Shirt 1' },
    { id: 12, imgSrc: 'images/Beat Studio3.jpg', rating: 4.2, price: '$35.00', title: 'Casual Shirt 2' },
    { id: 13, imgSrc: 'images/Beat Studio3.jpg', rating: 4.0, price: '$30.00', title: 'Casual Shirt 3' },
    { id: 14, imgSrc: 'images/Beat Studio3.jpg', rating: 3.9, price: '$25.00', title: 'Casual Shirt 4' },
    { id: 15, imgSrc: 'images/Beat Studio3.jpg', rating: 4.3, price: '$38.00', title: 'Casual Shirt 5' },
  ],
};

export const Sales = () => (
  <div className="menswear-page">
    <h1>Sales & Discount 🏷️</h1>
    
    <section>
      <h2>Men's Sales</h2>
      <div className="products-grid">
        {productData.salesAndDiscount.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <div className="rating">Rating: {product.rating}</div>
            <div className="price">
              <span className="discount-price">{product.discountPrice}</span>
              <span className="original-price">{product.price}</span>
            </div>
            <button className="shop-now"><i className="fa fa-shopping-bag"></i> Shop Now</button>
            <button className="add-to-cart"><i className="fa fa-cart-plus"></i> Add to Cart</button>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2>Women's Sales</h2>
      <div className="products-grid">
        {productData.salesAndDiscount.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <div className="rating">Rating: {product.rating}</div>
            <div className="price">
              <span className="discount-price">{product.discountPrice}</span>
              <span className="original-price">{product.price}</span>
            </div>
            <button className="shop-now"><i className="fa fa-shopping-bag"></i> Shop Now</button>
            <button className="add-to-cart"><i className="fa fa-cart-plus"></i> Add to Cart</button>
          </div>
        ))}
      </div>
    </section>


    <section>
      <h2>Kid's Sales👚</h2>
      <div className="products-grid">
        {productData.salesAndDiscount.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <div className="rating">Rating: {product.rating}</div>
            <div className="price">
              <span className="discount-price">{product.discountPrice}</span>
              <span className="original-price">{product.price}</span>
            </div>
            <button className="shop-now"><i className="fa fa-shopping-bag"></i> Shop Now</button>
            <button className="add-to-cart"><i className="fa fa-cart-plus"></i> Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
 
  </div>
);
