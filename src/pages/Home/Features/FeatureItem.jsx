// Features/FeatureItem.jsx
import React from 'react';
import './Features.css';

function FeatureItem({ title, gifUrl, bgColor }) {
  return (
    <div className="feature-item">
      <div className="feature-circle" style={{ backgroundColor: bgColor }}>
        <img src={gifUrl} alt={title} className="feature-gif" />
      </div>
      <p className="feature-title">{title}</p>
    </div>
  );
}

export default FeatureItem;
