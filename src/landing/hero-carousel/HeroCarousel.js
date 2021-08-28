import React from 'react';
import './heroCarousel.css'
import Carousel from 'react-bootstrap/Carousel';

const HeroCarousel = () => {

    return (
        <div className="carouselArea">
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

    /*
            <div id="heroCarousel" className="carousel slide" data-ride="carousel" data-interval="10000">
            <ol className="carousel-indicators">
                <li data-target="#heroCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#heroCarousel" data-slide-to="1"></li>
                <li data-target="#heroCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="../../images/landing-images/jpnSlide01" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../../images/landing-images/jpnSlide02" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="../../images/landing-images/jpnSlide03" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    */
}

export default HeroCarousel;