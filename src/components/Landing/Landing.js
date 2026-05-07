import React from "react";
import './Landing.css';
// import focus from '../../img/focus.png'; // Default image
// import focus2 from '../../img/focus2.png'; // Hover image
import focus3 from '../../img/person.jpeg'; // Default image
import focus2 from '../../img/person2.jpg'; // Default image
import focus from '../../img/person3.jpg'; // Default image

import { FULL_NAME, SOCIAL_LINKS } from '../../Util/data';

const Landing = () => {
    const emailLinks = SOCIAL_LINKS.filter(social => social.showText);
    const iconLinks = SOCIAL_LINKS.filter(social => !social.showText);

    return (
        <section id="landing" className="landing">
            <div className="text-content">
                <h1>{FULL_NAME}</h1>
                <h4 className="subtitle">PhD Student @ Tsinghua University</h4>
                <div className="social-links-container">
                    <div className="email-link">
                        <i className="far fa-lg fa-envelope"></i>
                        <div className="email-texts">
                            {emailLinks.map((social, index) => (
                                <React.Fragment key={index}>
                                    <a href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                                        <span className="email-text">{social.text}</span>
                                    </a>
                                    {index < emailLinks.length - 1 && <span className="email-separator">,&nbsp;</span>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="icon-links">
                        {iconLinks.map((social, index) => (
                            <a key={index} href={social.link} rel="noopener noreferrer" target="_blank" aria-label={social.name}>
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src={focus} alt="Yang Yue" className="default-image" />
                {/* <img src={focus2} alt="Yang Yue Hover" className="hover-image" /> */}
                <img src={focus3} alt="Yang Yue Hover" className="hover-image" />
            </div>
        </section>
    );
};

export default Landing;
