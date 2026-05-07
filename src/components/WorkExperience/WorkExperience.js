import React from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../Util/data';

const WorkExperience = () => {
    return (
        <section id="work-experience">
            <h1>
                <span role="img" aria-label="work">💼</span>
                {' '}Work Experience
            </h1>
            <div className="work-experience-grid">
                {WORK_EXPERIENCE.map((item, index) => (
                    <div key={index} className="work-experience-item">
                        <div className="work-experience-date">{item.date}</div>
                        <div className="work-experience-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;