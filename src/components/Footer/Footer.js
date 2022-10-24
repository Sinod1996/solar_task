import React from 'react';
import '../../assets/styles/Footer.css'
import Form from '../Form';

function Footer(props) {
    return (
        <div className={'footer'}>
             <div>
                <h3>Contact Us</h3>
                <p>With engineers and professionals ready to answer your questions, we’ll do it all to meet your <br/> business’s needs.</p>

                <Form/>

            </div>
        </div>
    );
}

export default Footer;