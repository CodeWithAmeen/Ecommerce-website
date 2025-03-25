// src/pages/Home.js
import React, { useRef, useEffect } from 'react';
import SliderComponent from '../component/Slider'; // Adjusted import path
import ProductCard from '../component/Cards'; // Import the ProductCard component
import './CSS/Home.css';

const products = [
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 5,
  },
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 4.5,
  },
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 5,
  },
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 4,
  },
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 5,
  },
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 5,
  },
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 2.5,
  },
  {
    image: 'images/Beat Studio3.jpg',
    brand: 'adidas',
    title: 'Cartoon Astronaut T-Shirts',
    price: 78,
    rating: 4,
  },

];

export const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div>
      <SliderComponent />

      <h1 className="new-arrivals-header">New Arrivals</h1>

      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="banner">
        <img src="images/center-banner.jpg" alt="Banner" className="banner-image" />
        <div className="banner-content">
          <div className="sales-text">40% Sales Off</div>
          <button className="shop-now-button">
            Shop Now
            <div className="dropdown-menu">
              <div className="dropdown-item">
                Men's Wear
                <div className="dropdown-submenu">
                  <div className="dropdown-subitem">Subitem 1.1</div>
                  <div className="dropdown-subitem">Subitem 1.2</div>
                  <div className="dropdown-subitem">Subitem 1.3</div>
                </div>
              </div>
              <div className="dropdown-item">
                Women's Wear
                <div className="dropdown-submenu">
                  <div className="dropdown-subitem">Subitem 2.1</div>
                  <div className="dropdown-subitem">Subitem 2.2</div>
                  <div className="dropdown-subitem">Subitem 2.3</div>
                </div>
              </div>
              <div className="dropdown-item">
                Kid's Wear
                <div className="dropdown-submenu">
                  <div className="dropdown-subitem">Subitem 3.1</div>
                  <div className="dropdown-subitem">Subitem 3.2</div>
                  <div className="dropdown-subitem">Subitem 3.3</div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <section id="video-section">
        <h2 className="video-header">Watch Our Latest Collection</h2>
        <div className="video-container">
          <video ref={videoRef} width="100%" controls>
            <source src="images/your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <div className="download-container">
        <div className="download-text">
          Download Mega Mart Now on
        </div>
        <div className="download-image">
          <img src="images/Ads.png" alt="Download App" />
        </div>
      </div>
    </div>
  );
};
