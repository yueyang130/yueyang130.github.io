import React from "react";
import './Publications.css';
import { PUBLICATIONS } from '../../Util/data';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const highlightText = (text) => {
  // Pattern to highlight "Spotlight" and "Oral"
  const regex = /(Spotlight|Oral|Best Paper)/g;
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => (
        part.match(regex) ? 
          <span key={index} className="highlighted" style={{fontWeight: 'bold'}}>{part}</span> : 
          part
      ))}
    </>
  );
};

const formatAuthors = (authors) => {
    return authors.split(', ').map((author, index, array) => {
        const isBold = author.includes("Yang Yue");
        const needsComma = index !== array.length - 1;

        return (
            <span 
                key={index} 
                style={{ 
                    fontWeight: isBold ? 'bold' : 'normal', 
                    color: isBold ? 'black' : 'inherit' // Use black color if isBold
                }}
            >
                {author}{needsComma ? ', ' : ''}
            </span>
        );
    });
};

const Publications = () => {
    return (
      <section id="publications">
        <h1>
            <span role="img" aria-label="publications">📑</span>
            {' '}Publications
        </h1>
        <ul className="publications-list">
          {PUBLICATIONS.map(pub => (
            <li key={pub.id} className="publication-item">
              <span className="bullet">•</span>
              {highlightText(pub.name)}
              <p style={{margin: '4px 0' }}>{formatAuthors(pub.authors)}</p>
              <p className="publication-venue" style={{ margin: '4px 0 0 0' }}>{highlightText(pub.journal)}</p>
              <div className="publication-links" style={{ margin: '0' }}>
                <a href={pub.link} rel="noopener noreferrer" target="_blank">
                  [Paper]
                </a>
                {pub.code && (
                  <a href={pub.code} rel="noopener noreferrer" target="_blank">
                    [Code]
                  </a>
                )}
                {pub.projectPage && (
                  <a href={pub.projectPage} rel="noopener noreferrer" target="_blank">
                    [Homepage]
                  </a>
                )}
                {pub.twitter && (
                  <a href={pub.twitter} rel="noopener noreferrer" target="_blank">
                    [twitter]
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Publications;
