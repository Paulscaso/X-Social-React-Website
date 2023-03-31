import React from 'react';
import './Button.css';

const button = ({text,btnClass,href}) => {
  return (
    <a href={href} className={`btn ${btnClass}`}>{text}</a>
  )
}

export default button