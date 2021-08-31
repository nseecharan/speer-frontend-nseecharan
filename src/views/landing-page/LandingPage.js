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

const LandingPage = () => {

    return (
        <div className="landingPage">
            <div className="red sectionArea">
                <SectionMenu
                    menuTextColor="white"
                    menuBackground="blue"
                />
                <HeroCarousel></HeroCarousel>
            </div>
            <div className="red sectionArea">
                <SectionMenu
                    button={buttonStyles.redOnWhite}
                    buttonText={buttonStyles.text.tryNow}
                    menuTextColor="red"
                    menuBackground="black"
                />
                <SoundContent />
            </div>
            <div className="yellow sectionArea">
                <SectionMenu
                    button={buttonStyles.yellowOnWhite}
                    buttonText={buttonStyles.text.tryNow}
                    menuTextColor="yellow"
                    menuBackground="black"
                ></SectionMenu>
            </div>
            <div className="black perksArea">
                <SectionMenu
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
                    button={buttonStyles.blueOnWhite}
                    buttonText={buttonStyles.text.tryNow}
                    menuTextColor="blue"
                    menuBackground="black"
                ></SectionMenu>
                <ReviewsContent />
            </div>
            <div className="black sectionArea">
                <SectionMenu
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