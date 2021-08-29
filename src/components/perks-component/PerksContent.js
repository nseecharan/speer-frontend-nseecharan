import React from 'react';
import '../componentText.css';
import './perksContent.css';

const PerksContent = (props) => {

    return (
        <div className="perksText">
            <div className="perksTitle">
                <h3 className="whiteText s74">PERKS</h3>
            </div>
            <table>
                <thead>
                    <th>
                        <h3 className={props.headingColor1 + "Text s51-62"}>Subscription Payment Model</h3>
                    </th>
                    <th>
                        <h3 className={props.headingColor2 + "Text  s51-62"}>No Fee Cancelation Policy</h3>
                    </th>
                    <th>
                        <h3 className={props.headingColor3 + "Text  s51-62"}>Subscription Payment Model</h3>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td className="cloumn">
                            <p className={props.textColor + "Text s35"}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </td>
                        <td className="cloumn">
                            <p className={props.textColor + "Text s35"}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </td>
                        <td className="cloumn">
                            <p className={props.textColor + "Text s35"}>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default PerksContent;