import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CSS/About.css';

export const About = () => {
  const testimonials = [
    {
      stars: 5,
      text: "Electro Market Store exceeded my expectations. The product quality is top-notch and the service is excellent!",
      author: "John Doe",
      img: "images/testimonial1.jpg"
    },
    {
      stars: 4.5,
      text: "I am extremely satisfied with my purchase. The team was very helpful and the product arrived on time.",
      author: "Jane Smith",
      img: "images/testimonial2.jpg"
    },
    {
      stars: 5,
      text: "Great products and fantastic customer service. I highly recommend Electro Market Store!",
      author: "Michael Brown",
      img: "images/testimonial3.jpg"
    },
    {
      stars: 4.5,
      text: "The best online shopping experience I've ever had. Will definitely shop here again.",
      author: "Emily Davis",
      img: "images/testimonial4.jpg"
    },
    {
      stars: 5,
      text: "High quality products and fast delivery. Couldn't be happier with my purchase.",
      author: "Chris Wilson",
      img: "images/testimonial5.jpg"
    },
    {
      stars: 4.5,
      text: "Electro Market Store offers great value for money. I'm impressed with their selection.",
      author: "Sarah Johnson",
      img: "images/testimonial6.jpg"
    },
    {
      stars: 5,
      text: "Exceptional service and high-quality products. Highly recommend to everyone.",
      author: "David Lee",
      img: "images/testimonial7.jpg"
    },
    {
      stars: 5,
      text: "Very happy with my purchase. The customer support was very helpful.",
      author: "Lisa Martinez",
      img: "images/testimonial8.jpg"
    },
    {
      stars: 5,
      text: "Electro Market Store has become my go-to for electronics. Excellent quality and service.",
      author: "Robert Hernandez",
      img: "images/testimonial9.jpg"
    },
    {
      stars: 4.5,
      text: "Very satisfied with the products and service. Will definitely return for more.",
      author: "Jessica Gonzalez",
      img: "images/testimonial10.jpg"
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="our-story">
        <div className="container">
          <div className="story-header">
            <h1>Our Story</h1>
          </div>
          <div className="story-content">
            <div className="story-image">
              <img src="images/aboutus2.jpg" alt="Our Story Image" />
            </div>
            <div className="story-text">
              <h2>How It All Began</h2>
              <p>
              Founded in the year 2024, Mega-Mart was born out of a passion for providing top-quality clothing for men, women, and kids at unbeatable prices. Our journey began in Karachi, Pakistan, with a small but dedicated team committed to offering the best in fashion apparel. Through hard work and a customer-centric approach, we have quickly grown into a trusted name in the e-commerce world, building a loyal customer base and continuously expanding our product offerings.
               </p>

              <p>
              From the very beginning, our goal has been to combine style with excellence, ensuring that our customers always have access to the latest and greatest fashion trends. We pride ourselves on our rigorous selection process, handpicking each item to guarantee top-notch quality and design. Today, we serve thousands of satisfied customers, delivering not just clothing but a promise of reliability, affordability, and exceptional service. At Mega-Mart, we are committed to making your shopping experience as seamless and enjoyable as possible, every single time.
              </p>

            </div>
          </div>
        </div>
      </section>

      <br /><br /><br />

      <section className="our-mission">
        <div className="container">
          <div className="mission-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h1>Our Mission</h1>
          <p>At Mega-Mart, our mission is to redefine the way you experience fashion. We aim to provide top-quality clothing for men, women, and kids at unbeatable prices, ensuring our customers always have access to the latest trends. Our commitment to excellence drives us to handpick each item, guaranteeing superior quality and style. We strive to deliver not just clothing, but a promise of reliability, affordability, and exceptional service. Join us on our journey to make fashion more accessible and enjoyable for everyone.</p>
          <p>We believe that fashion should enhance your life, not complicate it. That’s why we meticulously select and curate our product range to include only the most stylish and comfortable apparel on the market. From chic dresses to casual wear and everything in between, our offerings are designed to meet the diverse needs of our customers. Our dedicated team stays ahead of fashion trends, ensuring that Mega-Mart remains your go-to source for the latest clothing styles.</p>
          <p>Customer satisfaction is at the heart of everything we do. We are committed to providing a seamless shopping experience, from easy navigation on our website to fast, reliable shipping. Our customer support team is always ready to assist you, ensuring that every interaction with Mega-Mart exceeds your expectations. Discover the Mega-Mart difference today, and let us help you embrace the latest in fashion.</p>






          </div>
      </section>

      <br /><br />

      <section className="our-values">
        <div className="container">
          <h1>Our Values</h1>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-smile"></i>
              </div>
              <div className="value-title">Customer Satisfaction</div>
              <p>Your happiness is our top priority. We go above and beyond to ensure you have a positive shopping experience.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="value-title">Quality Assurance</div>
              <p>We handpick every product to ensure it meets our high standards of quality and performance.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="value-title">Innovation</div>
              <p>We stay ahead of the curve by constantly updating our inventory with the latest and greatest products.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <div className="value-title">Integrity</div>
              <p>We believe in transparent and honest business practices, ensuring that you can shop with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <br /><br />

      <section className="why-shop">
        <div className="container">
          <h1>Why Shop With Us?</h1>
          <div className="reasons">
            <div className="reason">
              <i className="fas fa-cubes"></i>
              <h2>Wide Selection</h2>
              <p>We offer a diverse range of products to meet all your tech and lifestyle needs.</p>
            </div>
            <div className="reason">
              <i className="fas fa-dollar-sign"></i>
              <h2>Competitive Prices</h2>
              <p>We provide high-quality products at prices that won’t break the bank.</p>
            </div>
            <div className="reason">
              <i className="fas fa-truck"></i>
              <h2>Fast Shipping</h2>
              <p>Enjoy quick and reliable shipping on all orders, so you can start enjoying your new products sooner.</p>
            </div>
            <div className="reason">
              <i className="fas fa-headset"></i>
              <h2>Excellent Customer Service</h2>
              <p>Our friendly and knowledgeable customer service team is here to help with any questions or concerns.</p>
            </div>
          </div>
        </div>
      </section>

      <br /><br />

      <section className="testimonials">
        <div className="container">
          <h1>Customers Reviews</h1>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-content">
                  <img src={testimonial.img} alt={testimonial.author} className="testimonial-image"/>
                  <div className="stars">
                    {[...Array(5)].map((star, i) => (
                      <i
                        key={i}
                        className={`fas fa-star${i < testimonial.stars ? "" : "-half-alt"}`}
                      />
                    ))}
                  </div>
                  <p>{testimonial.text}</p>
                  <div className="author">- {testimonial.author}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
