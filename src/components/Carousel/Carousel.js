import React from 'react';
import computer from '../../static/images/computer.jpg';
import gamers from '../../static/images/gamers.jpg';
import primeVideo from '../../static/images/primeVideo.jpg';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel'

const CarouselAds = () => {
  return (
    <Carousel variant="ligth" id="Carousel" nextLabel="" prevLabel="" slide={false} fade={false} >
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={computer}
          alt="Computer"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={gamers}
          alt="Gamer products"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src={primeVideo}
          alt="Prime Video"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export {CarouselAds};
