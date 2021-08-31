import React from 'react';
import '../views.css';
import OptionsContent from '../../components/options-component/OptionsContent';
import ContactContent from '../../components/contact-component/ContactContent';
import SectionMenu from '../../components/section-menu/SectionMenu';
import perksData from '../../data/perksData';
import pricingData from '../../data/pricingData';
import buttonStyles from '../../data/buttonStyles';
import optionTextFormatting from '../../data/optionTextFormatting';


const Pricing = () => {

    return (

        <div className="landingPage">
            <div className="black pricingArea">
                <SectionMenu
                    menuTextColor="white"
                    menuBackground="blue"
                />
                <OptionsContent
                    optionData={pricingData}
                    headingColors={["red", "yellow", "blue"]}
                    detailsColor={"white"}
                    textFormat={optionTextFormatting.pricingStyling}
                    buttons={[buttonStyles.whiteOnRed, buttonStyles.whiteOnYellow, buttonStyles.whiteOnBlue]}
                    buttonText={buttonStyles.text.select}
                    redirect="/payment"
                />
            </div>
            <div className="red perksArea">
                <SectionMenu
                    menuTextColor="red"
                    menuBackground="black"
                    disablePerks="true"
                />
                <OptionsContent
                    optionData={perksData}
                    headingColors={["white"]}
                    detailsColor={"black"}
                    textFormat={optionTextFormatting.perksStyling}
                />

            </div>
            <div className="purple contactArea">
                <ContactContent />
            </div>
        </div>
    );
}

export default Pricing;
