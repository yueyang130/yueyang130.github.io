import React from "react";
import './FeaturedPublications.css';
import { FEATUREDPUBLICATIONS } from '../../Util/data';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const highlightText = (text) => {
  // If text contains HTML tags, render as HTML
  if (text.includes('<span')) {
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  }
  
  // Pattern to highlight "Spotlight" and "Oral"
  const regex = /(Spotlight|Oral)/g;
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

const FeaturedPublications = () => {
  return (
    <section id="featured-publications">
      <h1>
        <span role="img" aria-label="sparkles">✨</span>
        {' '}Featured Publications
      </h1>
      <div className="publications-grid">
        {FEATUREDPUBLICATIONS.map(pub => (
          <div key={pub.id} className="publication-entry">
            <img src={pub.image} alt={pub.name} className="publication-image" />
            <div className="publication-content">
              <h2 onClick={() => window.open(pub.link, "_blank")}>
                {highlightText(pub.name)}
              </h2>
              <p className="publication-date">{formatDate(pub.date)}</p>
              <p className="publication-venue">{highlightText(pub.journal)}</p>
              <p style={{ fontStyle: 'italic', fontSize: '0.85rem' }}>{formatAuthors(pub.authors)}</p>
              <div className="publication-links">
                <a href={pub.link} rel="noopener noreferrer" target="_blank">
                  [paper]
                </a>
                {pub.code && (
                  <a href={pub.code} rel="noopener noreferrer" target="_blank">
                    [code]
                  </a>
                )}
                {pub.projectPage && (
                  <a href={pub.projectPage} rel="noopener noreferrer" target="_blank">
                    [project page]
                  </a>
                )}
                {pub.twitter && (
                  <a href={pub.twitter} rel="noopener noreferrer" target="_blank">
                    [twitter]
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPublications;
