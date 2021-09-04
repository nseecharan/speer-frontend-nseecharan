import React from 'react';
import '../views.css';
import './pricing.css';
import OptionsContent from '../../components/options-component/OptionsContent';
import ContactContent from '../../components/contact-component/ContactContent';
import SectionMenu from '../../components/section-menu/SectionMenu';
import perksData from '../../data/perksData';
import pricingData from '../../data/pricingData';
import buttonStyles from '../../data/buttonStyles';
import optionTextFormatting from '../../data/optionTextFormatting';


const Pricing = () => {

    return (

        <div className="pricingPage">
            <div className="black pricingArea">
                <SectionMenu
                    menuTextColor="white"
                    menuBackground="blue"
                />
                <div className="optionsLayout">
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
            </div>
            <div className="red perksArea">
                <SectionMenu
                    menuTextColor="red"
                    menuBackground="black"
                    disablePerks="true"
                />
                <div className="optionsLayout">
                    <OptionsContent
                        optionData={perksData}
                        headingColors={["white"]}
                        detailsColor={"black"}
                        textFormat={optionTextFormatting.perksStyling}
                    />
                </div>
            </div>
            <div className="purple contactArea">
                <ContactContent />
            </div>
        </div>
    );
}

export default Pricing;
