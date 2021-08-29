import React from 'react';
import './contactContent.css';
import '../componentText.css';

const ContactContent = () => {

    return (

        <div className="whiteText">
            <div className="emailLink">
                <a className="s35" href="support@experienceconcerts.co"><i class="bi bi-envelope-fill"></i>support@experienceconcerts.co</a>
            </div>
            <div className="footer">
                <h4 className="s48">EXP|CON</h4>
                <h6 className="s24">2019 © All Rights Reserved | Speer Technologies Incorporated</h6>
            </div>
        </div>
    );
}

export default ContactContent;