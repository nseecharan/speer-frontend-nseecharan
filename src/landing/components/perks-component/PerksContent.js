import React from 'react';
import '../componentText.css';
import './perksContent.css';

const PerksContent = () => {

    return (
        <div className="perksText">
            <div className="perksTitle">
                <h3 className="whiteText s74">PERKS</h3>
            </div>
            <table>
                <thead>
                    <th>
                        <h3 className="redText s51-62">Subscription Payment Model</h3>
                    </th>
                    <th>
                        <h3 className="blueText s51-62">No Fee Cancelation Policy</h3>
                    </th>
                    <th>
                        <h3 className="yellowText s51-62">Subscription Payment Model</h3>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td className="cloumn">
                            <p className="whiteText s35">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </td>
                        <td className="cloumn">
                            <p className="whiteText s35">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </td>
                        <td className="cloumn">
                            <p className="whiteText s35">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default PerksContent;