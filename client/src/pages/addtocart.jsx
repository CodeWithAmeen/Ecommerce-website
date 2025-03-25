import React, { useState, useEffect } from 'react';
import './CSS/addtocart.css';

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCartItems);
  }, []);

  const handleDelete = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleShopNow = () => {
    // Define the behavior for the "Shop Now" button
    // For example, redirect to the homepage or product catalog
    window.location.href = '/'; // Adjust the URL as needed
  };

  return (
    <div className="add-to-cart-page">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img
            src="images/cartimg.png" // Replace with your image URL
            alt="Empty Cart"
            className="empty-cart-image"
          />
          <h2>No Collections</h2>
          <p>Your cart is empty. Start adding items to it!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <h2>Your Cart</h2>
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.imgSrc} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Rating: {item.rating}</p>
                  <p>Price: {item.discountPrice || item.price}</p>
                  <button className="delete-button" onClick={() => handleDelete(index)}>
                    <i className="fa fa-trash"></i> Delete
                  </button>
                </div>
                <button className="shop-now" onClick={handleShopNow}>
                  <i className="fa fa-shopping-cart"></i> Shop Now
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AddToCart;
