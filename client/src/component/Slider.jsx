import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CSS/Slider.css';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        <div>
          <img src="images/Slider1.png" alt="Slide 1" />
        </div>
        <div>
          <img src="images/Slider2.png" alt="Slide 2" />
        </div>
        <div>
          <img src="images/Slider3.png" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
