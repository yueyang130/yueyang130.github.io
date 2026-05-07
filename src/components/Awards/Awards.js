import React from 'react';
import './Awards.css';
import { AWARDS } from '../../Util/data';

const Awards = () => {
    return (
        <section id="awards">
            <h1>
                <span role="img" aria-label="awards">🏆</span>
                {' '}Awards and Honors
            </h1>
            <div className="awards-grid">
                {AWARDS.map((item, index) => (
                    <div key={index} className="award-item">
                        <div className="award-date">{item.date}</div>
                        <div className="award-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;
