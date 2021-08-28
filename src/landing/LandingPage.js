import React from 'react';
import Section from './section/Section';
import HeroCarousel from './hero-carousel/HeroCarousel';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './landingPage.css'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div>
                <HeroCarousel></HeroCarousel>
            </div>
            <div>
                <Section
                    color={'red'}
                    buttonTopRight={'white'}
                >red</Section>
            </div>
            <div>
                <Section
                    color={'yellow'}
                    buttonTopRight={'white'}
                >yellow</Section>
            </div>
            <div>
                <Section
                    color={'black'}
                    buttonTopRight={'special'}
                >black</Section>
            </div>
            <div>
                <Section
                    color={'blue'}
                    buttonTopRight={'white'}
                >blue</Section>
            </div>
            <div>
                <Section
                    color={'black'}
                >black</Section>
            </div>
            <div>purple section</div>
        </div>
    );
}

export default LandingPage;