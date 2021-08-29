import React from 'react';
import '../views.css';
import PerksContent from '../../components/perks-component/PerksContent';
import ContactContent from '../../components/contact-component/ContactContent';
import SectionMenu from '../../components/section-menu/SectionMenu';
import PricingContent from '../../components/pricing-component/PricingContent';


const Pricing = () => {

    return (

        <div className="landingPage">
            <div className="black pricingArea">
                <SectionMenu/>
                <PricingContent/>
            </div>
            <div className="red sectionArea">
                <SectionMenu/>
                <PerksContent
                headingColor1="white"
                headingColor2="white"
                headingColor3="white"
                textColor={"black"}
                />
            </div>
            <div className="purple contactArea">
                <ContactContent />
            </div>
        </div>
    );
}

export default Pricing;
