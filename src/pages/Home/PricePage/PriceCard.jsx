import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Ícone de verificado

function PriceCard({ planName, price, period, features, color, priceColor }) {
  return (
    <div className="price-card" style={{ borderColor: color }}>
      <div className="price-header" style={{ backgroundColor: color }}>
        <h3 className="plan-name">{planName}</h3>
        <p className="price" style={{ color: priceColor }}>{price}</p>
        <span className="period">{period}</span>
      </div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <FaCheckCircle className="checkmark" /> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PriceCard;
