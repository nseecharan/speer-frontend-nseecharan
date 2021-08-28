import React from 'react';
import SectionMenu from './section-menu/SectionMenu'
import HeroCarousel from './hero-carousel/HeroCarousel';
import './landingPage.css'
import SoundContent from './components/sound-component/SoundContent';
import PerksContent from './components/perks-component/PerksContent';
import GetExpConContent from './components/get-component/GetExpConContent';
import ContactContent from './components/contact-component/ContactContent';

const LandingPage = () => {
    return (
        <div className="landingPage">
            <div>
                <div className="red sectionArea">
                <SectionMenu/>
                    <HeroCarousel></HeroCarousel>
                </div>
            </div>
            <div>
                <div className="red sectionArea">
                    <SectionMenu 
                    buttonStyle={"white"}
                    textColor={"red"}
                    />
                    <SoundContent/>
                </div>
            </div>
            <div>
                <div className="yellow sectionArea">
                    <SectionMenu 
                    buttonStyle={"white"}
                    textColor={"yellow"}
                    ></SectionMenu>
                </div>
            </div>
            <div>
                <div className="black sectionArea">
                    <SectionMenu buttonStyle={"special"}></SectionMenu>
                    <PerksContent/>
                </div>
            </div>
            <div>
                <div className="blue sectionArea">
                    <SectionMenu 
                    buttonStyle={"white"}
                    textColor={"blue"}
                    ></SectionMenu>
                </div>
            </div>
            <div>
                <div className="black sectionArea">
                    <SectionMenu></SectionMenu>
                    <GetExpConContent/>
                </div>
            </div>
            <div className="purple contactArea">
                <ContactContent/>
            </div>
        </div>
    );
}

export default LandingPage;