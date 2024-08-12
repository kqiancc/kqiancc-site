import React from 'react';
import './FlowerAnimation.css'; // Create a separate CSS file for this component

const FlowerAnimation: React.FC = () => {
  const createFlowers = () => {
    const flowers = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const left = Math.random() * 100;

      flowers.push(
        <img
          key={i}
          src="/path/to/your-flower.png"
          className="flower"
          style={{
            width: `${size}px`,
            height: 'auto',
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
          alt="flower"
        />
      );
    }
    return flowers;
  };

  return (
    <div className="flower-container">
      {createFlowers()}
    </div>
  );
};

export default FlowerAnimation;
