import React from 'react';
import "./payments.css";
import "../views.css";
import countries from '../../data/countries.json';
import SectionMenu from '../../components/section-menu/SectionMenu';
import ContactContent from '../../components/contact-component/ContactContent';
import PaymentContent from '../../components/payment-component/PaymentContent';


//class may be better in this case
const Payments = () => {

    const countryData = [];
    Object.keys(countries).forEach(key => {
        countryData.push(countries[key])
    })

    const date = new Date();
    const currentYear = date.getFullYear();
    const expYears = [];

    for (let i = currentYear; i < (currentYear + 3); i++) {

        expYears.push(i);
    }

    //form Submit not implemented for this demo
    return (
        <div className="paymentsPage">
            <SectionMenu
                menuTextColor="red"
                menuBackground="black"
                defaultTextColor="black"
            />
            <PaymentContent
                expYears={expYears}
                countryData={countryData}
            />
            <div className="purple contactArea">
                <ContactContent />
            </div>
        </div>
    )
}

export default Payments;