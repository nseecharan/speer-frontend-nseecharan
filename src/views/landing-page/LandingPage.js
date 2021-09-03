import React from 'react';
import './landingPage.css';
import '../views.css';
import buttonStyles from '../../data/buttonStyles';
import SectionMenu from '../../components/section-menu/SectionMenu'
import HeroCarousel from '../../components/hero-carousel/HeroCarousel';
import SoundContent from '../../components/sound-component/SoundContent';
import OptionsContent from '../../components/options-component/OptionsContent';
import GetExpConContent from '../../components/get-component/GetExpConContent';
import ContactContent from '../../components/contact-component/ContactContent';
import perksData from '../../data/perksData';
import optionTextFormatting from '../../data/optionTextFormatting';
import ReviewsContent from '../../components/reviews-component/ReviewsContent';
import ImageContent from '../../components/image-component/ImageContent';

const LandingPage = () => {

    return (
        <div className="landingPage">
            <div className="sectionArea">
                <SectionMenu
                    buttonId="heroMenuBtn"
                    menuTextColor="white"
                    menuBackground="blue"
                />
                <HeroCarousel></HeroCarousel>
            </div>
            <div className="red sectionArea">
                <div className="redSectionMenu">
                    <SectionMenu
                        buttonId="soundMenuBtn"
                        button={buttonStyles.redOnWhite}
                        buttonText={buttonStyles.text.tryNow}
                        menuTextColor="red"
                        menuBackground="black"
                    />
                </div>
                <SoundContent />
            </div>
            <div className="yellow sectionArea">
                <ImageContent />
                <div className="yellowSectionMenu">
                    <SectionMenu
                        buttonId="imageMenuBtn"
                        button={buttonStyles.yellowOnWhite}
                        buttonText={buttonStyles.text.tryNow}
                        menuTextColor="yellow"
                        menuBackground="black"
                    ></SectionMenu>
                </div>
            </div>
            <div className="black perksArea">
                <SectionMenu
                    buttonId="perksMenuBtn"
                    button={buttonStyles.special}
                    buttonText={buttonStyles.text.tryNow}
                    menuTextColor="white"
                    menuBackground="blue"
                    disablePerks="true"
                />
                <OptionsContent
                    optionData={perksData}
                    headingColors={["red", "blue", "yellow"]}
                    detailsColor={"white"}
                    textFormat={optionTextFormatting.perksStyling}
                />
            </div>
            <div className="blue sectionArea">
                <SectionMenu
                    buttonId="reviewsMenuBtn"
                    button={buttonStyles.blueOnWhite}
                    buttonText={buttonStyles.text.tryNow}
                    menuTextColor="blue"
                    menuBackground="black"
                ></SectionMenu>
                <ReviewsContent />
            </div>
            <div className="black sectionArea">
                <SectionMenu
                    buttonId="getEXMenuBtn"
                    menuTextColor="white"
                    menuBackground="blue"
                ></SectionMenu>
                <GetExpConContent />
            </div>
            <div className="purple contactArea">
                <ContactContent />
            </div>
        </div>
    );
}

export default LandingPage;