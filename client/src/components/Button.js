import React from 'react';

const Button = ({title, handleClick, className }) => {
  return (
    <a onClick={handleClick} className={className}>{title}</a>
  )
}

export default Button;
