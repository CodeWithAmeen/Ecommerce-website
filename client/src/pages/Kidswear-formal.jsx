import React from 'react';
import Swal from 'sweetalert2';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './CSS/ProductsPages.css'; // Import CSS for styling

const productData = {
  SalesAndDiscount: [
    { id: 1, imgSrc: 'images/Beat Studio3.jpg', rating: 4.5, price: '$30.00', discountPrice: '$20.00', title: 'Discounted Product 1' },
    { id: 2, imgSrc: 'images/Beat Studio3.jpg', rating: 4.0, price: '$40.00', discountPrice: '$25.00', title: 'Discounted Product 2' },
    { id: 3, imgSrc: 'images/Beat Studio3.jpg', rating: 4.8, price: '$50.00', discountPrice: '$30.00', title: 'Discounted Product 3' },
    { id: 4, imgSrc: 'images/Beat Studio3.jpg', rating: 3.5, price: '$35.00', discountPrice: '$22.00', title: 'Discounted Product 4' },
    { id: 5, imgSrc: 'images/Beat Studio3.jpg', rating: 4.2, price: '$45.00', discountPrice: '$28.00', title: 'Discounted Product 5' },
  ],
  CasualDresses: [
    { id: 6, imgSrc: 'images/Beat Studio3.jpg', rating: 4.7, price: '$60.00', title: 'Casual Dress 1' },
    { id: 7, imgSrc: 'images/Beat Studio3.jpg', rating: 4.3, price: '$55.00', title: 'Casual Dress 2' },
    { id: 8, imgSrc: 'images/Beat Studio3.jpg', rating: 4.0, price: '$50.00', title: 'Casual Dress 3' },
    { id: 9, imgSrc: 'images/Beat Studio3.jpg', rating: 3.8, price: '$45.00', title: 'Casual Dress 4' },
    { id: 10, imgSrc: 'images/Beat Studio3.jpg', rating: 4.6, price: '$65.00', title: 'Casual Dress 5' },
  ],
  CasualShirts: [
    { id: 11, imgSrc: 'images/Beat Studio3.jpg', rating: 4.5, price: '$40.00', title: 'Casual Shirt 1' },
    { id: 12, imgSrc: 'images/Beat Studio3.jpg', rating: 4.2, price: '$35.00', title: 'Casual Shirt 2' },
    { id: 13, imgSrc: 'images/Beat Studio3.jpg', rating: 4.0, price: '$30.00', title: 'Casual Shirt 3' },
    { id: 14, imgSrc: 'images/Beat Studio3.jpg', rating: 3.9, price: '$25.00', title: 'Casual Shirt 4' },
    { id: 15, imgSrc: 'images/Beat Studio3.jpg', rating: 4.3, price: '$38.00', title: 'Casual Shirt 5' },
  ],
  CasualPants: [
    { id: 16, imgSrc: 'images/Beat Studio3.jpg', rating: 4.4, price: '$50.00', title: 'Casual Pants 1' },
    { id: 17, imgSrc: 'images/Beat Studio3.jpg', rating: 4.1, price: '$45.00', title: 'Casual Pants 2' },
    { id: 18, imgSrc: 'images/Beat Studio3.jpg', rating: 3.9, price: '$40.00', title: 'Casual Pants 3' },
    { id: 19, imgSrc: 'images/Beat Studio3.jpg', rating: 4.2, price: '$35.00', title: 'Casual Pants 4' },
    { id: 20, imgSrc: 'images/Beat Studio3.jpg', rating: 4.3, price: '$55.00', title: 'Casual Pants 5' },
  ],
};

const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Show a SweetAlert notification
  Swal.fire({
    icon: 'success',
    title: 'Added to Cart!',
    text: 'Your product has been added to the cart.',
    showConfirmButton: false,
    timer: 1500,
  });
};

export const KidswearFormal = () => (
  <div className="menswear-page">
    <h1>Men's Wear</h1>

    {/* Render different product categories */}
    {Object.entries(productData).map(([category, products]) => (
      <section key={category}>
        <h2>{category.replace(/([A-Z])/g, ' $1').trim()} </h2>
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
              <button className="shop-now"><i className="fa fa-shopping-bag"></i> Shop Now</button>
              <button className="add-to-cart" onClick={() => addToCart(product)}>
                <i className="fa fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    ))}
  </div>
);