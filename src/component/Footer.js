
import React from 'react';
import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter }
    from '@fortawesome/free-brands-svg-icons';
import '../css/style.css'; // Import your custom CSS file 

const Footer = () => {
    return (
        <footer className="footer fixed-bottom" style={{background: "linear-gradient(to right, #d72b3d, #e9d0d5)"}}>
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-12 text-md-right">
                        <ul className="social-icons list-unstyled">
                            <li>
                                <a
                                    href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href=
                                    "https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                            <li>
                                <a href=
                                    "https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    
    );
};

export default Footer;