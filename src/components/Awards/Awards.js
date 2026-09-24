import React from 'react';
import './Awards.css';
import { AWARDS } from '../../Util/data';

const AWARD_GROUPS = [
    { id: 'academic', title: 'Academic Awards' },
    { id: 'other', title: 'Other Honors' }
];

const Awards = () => {
    return (
        <section id="awards">
            <h1>
                <span role="img" aria-label="awards">🏆</span>
                {' '}Awards and Honors
            </h1>
            {AWARD_GROUPS.map(group => (
                <div key={group.id} className={`award-group award-group--${group.id}`} role="group" aria-labelledby={`awards-${group.id}`}>
                    <h2 id={`awards-${group.id}`} className="award-group-title">{group.title}</h2>
                    <div className="awards-grid">
                        {AWARDS.filter(item => item.category === group.id).map((item, index) => (
                            <div key={index} className={`award-item${item.featured ? ' award-item--featured' : ''}`}>
                                <div className="award-date">{item.date}</div>
                                <div className="award-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Awards;
