import React from 'react';
import './howItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <h3>Donate Surplus Food</h3>
          <p>Food donors list surplus food items on our platform.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <h3>AI Matches Food</h3>
          <p>Our AI system finds the nearest recipients in need.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <h3>Efficient Delivery</h3>
          <p>Volunteers transport food quickly and efficiently.</p>
        </div>
        <div className="step">
          <div className="step-number">4</div>
          <h3>Food Reaches the Needy</h3>
          <p>People in need receive fresh, surplus food.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

// CSS (Add to an external stylesheet or use styled-components)
// .how-it-works-container {
//   text-align: center;
//   padding: 50px 20px;
//   background-color: #f9f9f9;
// }

// .section-title {
//   font-size: 2rem;
//   margin-bottom: 20px;
// }

// .steps-container {
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   flex-wrap: wrap;
// }

// .step {
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   width: 250px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   text-align: center;
// }

// .step-number {
//   background: #ff9800;
//   color: white;
//   width: 40px;
//   height: 40px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   font-size: 1.5rem;
//   margin: 0 auto 10px;
// }

// h3 {
//   font-size: 1.2rem;
//   margin-bottom: 10px;
// }

// p {
//   font-size: 1rem;
//   color: #666;
// }
