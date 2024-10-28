import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brewing1Image from '../../assets/brewing1.png';
import Brewing2Image from '../../assets/brewing2.png';
import BrewingImage from '../../assets/brewing3.png';
import '../css/DarkCarousel.css'; // Pastikan untuk mengimpor CSS

function DarkCarousel() {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Brewing2Image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>1</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={BrewingImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>2</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={Brewing1Image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>3</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkCarousel;