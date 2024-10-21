import React from 'react';
import { FontAwesomeIcon }
    from '@fortawesome/react-fontawesome';
import { faUser }
    from '@fortawesome/free-solid-svg-icons';
import '../css/style.css';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="section-title " >

                        About Me
                    </h2>

                    <p className="section-description mt-4" style={{
                        fontSize: "20px",
                        textAlign: "revert",
                        color: "#a95b5b",
                        letterSpacing: "1px",
                        lineHeight: "1.8",
                        wordSpacing: "2px",
                    }}>
                        I am a skilled Internship Trainee with over 4 years  of
                        hands-on experience in frontend  web development. My
                        expertise includes using technologies such as Node.js,
                        JavaScript,React, HTML, CSS, and Bootstrap. As a problem solver,
                        I have successfully designed and developed user-friendly,
                        responsive web applications.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;