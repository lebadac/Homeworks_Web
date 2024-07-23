import React from 'react';
import './Card.css';

const Card = ({title, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
