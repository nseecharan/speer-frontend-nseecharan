import React from 'react';
import "./paymentContent.css";
import "../../views/views.css";
import "../../components/componentText.css";
import months from '../../data/months';
import buttonStyles from '../../data/buttonStyles';
import AppButton from '../../buttons/AppButton';

const PaymentContent = (props) => {

    const countryData = props.countryData;
    const expYears = props.expYears;

    return (
        <form>
            <h1 className="paymentHeader s74">PAYMENT</h1>
            <div id="tierOptions">
                <h4 className="s45">1. Select your plan</h4>
                <div className="formTierBody">
                    <div className="tier s37">
                        <label>
                            <input name="tiers" type="radio" id="basic" value="basic" required />
                            <span className="redText">BASIC</span>
                        </label>
                    </div>
                    <div className="tier s37">
                        <label>
                            <input name="tiers" type="radio" id="advanced" value="advanced" required />
                            <span className="yellowText">ADVANCED</span>
                        </label>
                    </div>
                    <div className="tier s37">
                        <label>
                            <input name="tiers" type="radio" id="pro" value="pro" required />
                            <span className="blueText">PRO</span>
                        </label>
                    </div>
                </div>
            </div>
            <div className="infoArea">
                <div id="billingInfo">
                    <h4 className="s45">2. Billing Information</h4>
                    <div className="singleField">
                        <label className="s22">FULL NAME</label>
                        <input id="nameField" type="text" maxLength="60" required />
                    </div>
                    <div className="singleField">
                        <label className="s22">BILLING ADDRESS</label>
                        <input id="addressField" type="text" maxLength="60" required />
                    </div>
                    <div className="doubleField">
                        <div className="singleField spacing">
                            <label className="s22">CITY</label>
                            <input id="cityField" type="text" maxLength="60" required />
                        </div>
                        <div className="singleField">
                            <label className="s22">POSTAL CODE</label>
                            <input id="postalCode" type="text" maxLength="6" required />
                        </div>
                    </div>
                    <div className="singleField">
                        <label className="s22">COUNTRY</label>
                        <select id="countryField" required>
                            <option value=""></option>
                            {countryData.map((country, index) => {
                                return (country !== "" && <option key={index} value={country}>{country}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div id="cardInfo">
                    <h4 className="s45">3. Credit Card Information</h4>
                    <div className="singleField">
                        <label className="s22">CARDHOLDER'S NAME</label>
                        <input id="cardHolder" type="text" required />
                    </div>
                    <div className="singleField">
                        <label className="s22">CARD NUMBER</label>
                        <input id="cardNumber" type="text" minLength="16" maxLength="16" required />
                    </div>
                    <div className="doubleField">
                        <div className="singleField spacing">
                            <label className="s22">EXPIRY MONTH</label>
                            <select id="expiryMonth" required>
                                <option value=""></option>
                                {months.map((month, index) => {
                                    return (<option key={index} value={month}>{month}</option>)
                                })}
                            </select>
                        </div>
                        <div className="singleField">
                            <label className="s22">EXPIRY YEAR</label>
                            <select id="expiryYear" required>
                                <option value=""></option>
                                {expYears.map((year, index) => {
                                    return (<option key={index} value={year}>{year}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="singleField">
                        <label className="s22">CVV</label>
                        <input id="cvv" type="text" minLength="3" maxLength="3" required />
                    </div>
                </div>
            </div>

            <div className="confirmation">
                <p>By continuing, I acknowledge that I’ve read and agree to the <a className="termsServices" href="/">Terms of Service & Privacy Policy.</a></p>
                <AppButton
                    button={buttonStyles.special}
                    buttonText={buttonStyles.text.download}
                ></AppButton>
            </div>
        </form>
    )
}

export default PaymentContent;