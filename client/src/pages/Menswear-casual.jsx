import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CSS/ProductsPages.css'; // Import CSS for styling

const productData = {
  SalesAndDiscount: [
    { id: 1, imgSrc: 'images/man casual.jpg', rating: 4.5, price: '$30.00', discountPrice: '$20.00', title: 'Discounted Product 1', colors: ['Red', 'Blue', 'Green'], details: 'More information about Discounted Product 1.' },
    { id: 2, imgSrc: 'images/man casual.jpg', rating: 4.0, price: '$40.00', discountPrice: '$25.00', title: 'Discounted Product 2', colors: ['Yellow', 'Black'], details: 'More information about Discounted Product 2.' },
    { id: 3, imgSrc: 'images/man casual.jpg', rating: 4.8, price: '$50.00', discountPrice: '$30.00', title: 'Discounted Product 3', colors: ['White', 'Gray'], details: 'More information about Discounted Product 3.' },
    { id: 4, imgSrc: 'images/man casual.jpg', rating: 3.5, price: '$35.00', discountPrice: '$22.00', title: 'Discounted Product 4', colors: ['Purple', 'Pink'], details: 'More information about Discounted Product 4.' },
    { id: 5, imgSrc: 'images/man casual.jpg', rating: 4.2, price: '$45.00', discountPrice: '$28.00', title: 'Discounted Product 5', colors: ['Brown', 'Navy'], details: 'More information about Discounted Product 5.' },
  ],
  CasualDresses: [
    { id: 6, imgSrc: 'images/man casual.jpg', rating: 4.7, price: '$60.00', title: 'Casual Dress 1', colors: ['Blue', 'Black'], details: 'More information about Casual Dress 1.' },
    { id: 7, imgSrc: 'images/man casual.jpg', rating: 4.3, price: '$55.00', title: 'Casual Dress 2', colors: ['Red', 'White'], details: 'More information about Casual Dress 2.' },
    { id: 8, imgSrc: 'images/man casual.jpg', rating: 4.0, price: '$50.00', title: 'Casual Dress 3', colors: ['Green', 'Yellow'], details: 'More information about Casual Dress 3.' },
    { id: 9, imgSrc: 'images/man casual.jpg', rating: 3.8, price: '$45.00', title: 'Casual Dress 4', colors: ['Orange', 'Gray'], details: 'More information about Casual Dress 4.' },
    { id: 10, imgSrc: 'images/man casual.jpg', rating: 4.6, price: '$65.00', title: 'Casual Dress 5', colors: ['Black', 'Pink'], details: 'More information about Casual Dress 5.' },
  ],
  CasualShirts: [
    { id: 11, imgSrc: 'images/man casual.jpg', rating: 4.5, price: '$40.00', title: 'Casual Shirt 1', colors: ['White', 'Black'], details: 'More information about Casual Shirt 1.' },
    { id: 12, imgSrc: 'images/man casual.jpg', rating: 4.2, price: '$35.00', title: 'Casual Shirt 2', colors: ['Red', 'Blue'], details: 'More information about Casual Shirt 2.' },
    { id: 13, imgSrc: 'images/man casual.jpg', rating: 4.0, price: '$30.00', title: 'Casual Shirt 3', colors: ['Yellow', 'Green'], details: 'More information about Casual Shirt 3.' },
    { id: 14, imgSrc: 'images/man casual.jpg', rating: 3.9, price: '$25.00', title: 'Casual Shirt 4', colors: ['Pink', 'Purple'], details: 'More information about Casual Shirt 4.' },
    { id: 15, imgSrc: 'images/man casual.jpg', rating: 4.3, price: '$38.00', title: 'Casual Shirt 5', colors: ['Orange', 'Brown'], details: 'More information about Casual Shirt 5.' },
  ],
  CasualPants: [
    { id: 16, imgSrc: 'images/man casual.jpg', rating: 4.4, price: '$50.00', title: 'Casual Pants 1', colors: ['Black', 'Gray'], details: 'More information about Casual Pants 1.' },
    { id: 17, imgSrc: 'images/man casual.jpg', rating: 4.1, price: '$45.00', title: 'Casual Pants 2', colors: ['Navy', 'Beige'], details: 'More information about Casual Pants 2.' },
    { id: 18, imgSrc: 'images/man casual.jpg', rating: 3.9, price: '$40.00', title: 'Casual Pants 3', colors: ['Brown', 'Green'], details: 'More information about Casual Pants 3.' },
    { id: 19, imgSrc: 'images/man casual.jpg', rating: 4.2, price: '$35.00', title: 'Casual Pants 4', colors: ['Red', 'Yellow'], details: 'More information about Casual Pants 4.' },
    { id: 20, imgSrc: 'images/man casual.jpg', rating: 4.3, price: '$55.00', title: 'Casual Pants 5', colors: ['Pink', 'White'], details: 'More information about Casual Pants 5.' },
  ],
};

const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  Swal.fire({
    icon: 'success',
    title: 'Added to Cart!',
    text: 'Your product has been added to the cart.',
    showConfirmButton: false,
    timer: 1500,
  });
};

export const MenswearCasual = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [shopNowClickCount, setShopNowClickCount] = useState(0);

  const handleShopNowClick = (product) => {
    if (!selectedProduct || selectedProduct.id !== product.id) {
      // If it's a new product or first click on this product, reset the click count
      setSelectedProduct(product);
      setShopNowClickCount(1); // First click: Show product details
    } else {
      // If it's the second click on the same product
      setShopNowClickCount(2); // Second click: Show payment gateway
    }
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setShopNowClickCount(0); // Reset click count on close
  };

  return (
    <div className="menswear-page">
      <h1>Men's Wear</h1>
      {/* Render different product categories */}
      {Object.entries(productData).map(([category, products]) => (
        <section key={category}>
          <h2>{category.replace(/([A-Z])/g, ' $1').trim()}</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imgSrc} alt={product.title} className="product-image" />
                <h3 className="product-title">{product.title}</h3>
                <div className="rating">Rating: {product.rating}</div>
                <div className="price">
                  {product.discountPrice ? (
                    <>
                      <span className="discount-price">{product.discountPrice}</span>
                      <span className="original-price">{product.price}</span>
                    </>
                  ) : (
                    <span className="price">{product.price}</span>
                  )}
                </div>
                <button className="shop-now" onClick={() => handleShopNowClick(product)}>
                  <i className="fa fa-shopping-bag"></i> Shop Now
                </button>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  <i className="fa fa-cart-plus"></i> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Product Details or Payment Gateway Modal */}
      {selectedProduct && (
        <div className="product-details-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleClose}>X</button>
            {shopNowClickCount === 1 ? (
              <>
                <img src={selectedProduct.imgSrc} alt={selectedProduct.title} className="modal-product-image" />
                <h3 className="product-title">{selectedProduct.title}</h3>
                <div className="rating">Rating: {selectedProduct.rating}</div>
                <div className="price">
                  {selectedProduct.discountPrice ? (
                    <>
                      <span className="discount-price">{selectedProduct.discountPrice}</span>
                      <span className="original-price">{selectedProduct.price}</span>
                    </>
                  ) : (
                    <span className="price">{selectedProduct.price}</span>
                  )}
                </div>
                <div className="colors">
                  <strong>Available Colors:</strong> {selectedProduct.colors.join(', ')}
                </div>
                <div className="details">
                  <strong>Details:</strong> {selectedProduct.details}
                </div>

                {/* Add to Cart and Shop Now Buttons */}
                <div className="modal-buttons">
                  <button className="add-to-cart" onClick={() => addToCart(selectedProduct)}>
                    <i className="fa fa-cart-plus"></i> Add to Cart
                  </button>
                  <button className="shop-now" onClick={() => handleShopNowClick(selectedProduct)}>
                    <i className="fa fa-shopping-bag"></i> Shop Now
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>Payment Gateway for {selectedProduct.title}</h3>
                <form className="payment-form">
                  <label>
                    Card Number:
                    <input type="text" placeholder="Enter your card number" required />
                  </label>
                  <label>
                    Expiration Date:
                    <input type="text" placeholder="MM/YY" required />
                  </label>
                  <label>
                    CVV:
                    <input type="text" placeholder="CVV" required />
                  </label>
                  <label>
                    Name on Card:
                    <input type="text" placeholder="Full Name" required />
                  </label>
                  <label>
                    Billing Address:
                    <input type="text" placeholder="Street Address" required />
                  </label>
                  <button type="submit" className="submit-payment">Pay Now</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};