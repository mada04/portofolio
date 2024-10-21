
import React from 'react'; 
import { FontAwesomeIcon } 
    from '@fortawesome/react-fontawesome'; 
import { faEnvelope, faPhone } 
    from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub } 
    from '@fortawesome/free-brands-svg-icons'; 

import '../css/style.css'; 
import Breadcrumbs from './BreadCrumbs';

const Contact = () => { 
    const breadcrumbsPaths = 
        [ 
            { title: 'Home', to: '/' }, 
            { title: 'Contact', to: '/contact' } 
        ]; 

    return ( 
        <section id="contact" className="container"> 
            <Breadcrumbs paths={breadcrumbsPaths} /> 
            <h2 className="section-title">Contact</h2> 
            <p className="section-description"> 
                Feel free to reach out for
                collaboration or inquiries. 
            </p> 
            <ul className="contact-list list-unstyled"> 
                <li> 
                    <FontAwesomeIcon icon={faEnvelope} 
                        className="contact-icon" /> 
                    mdalcu96@gmail.com 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faLinkedin} 
                        className="contact-icon" /> 
                    LinkedIn 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faGithub} 
                        className="contact-icon" /> 
                    GitHub 
                </li> 
                <li> 
                    <FontAwesomeIcon icon={faPhone} 
                        className="contact-icon" /> 
                   0757914654
                </li> 
            </ul> 
        </section> 
    ); 
}; 

export default Contact;