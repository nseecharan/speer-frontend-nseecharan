import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './heroCarousel.css'
import HeroContent from '../../components/hero-component/HeroContent';

const HeroCarousel = () => {

    return (
        <div className="carouselArea">
            <HeroContent />
            <Carousel>
                <Carousel.Item interval={10000}>
                    <div className="slide1"
                        alt="First slide"
                    ></div>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <div className="slide2"
                        alt="Second slide"
                    ></div>
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <div className="slide3"
                        alt="Third slide"
                    ></div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroCarousel;