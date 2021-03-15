import react from 'react';

const Button = ({title, handleClick, className }) => {
  return (
    <a onClick={handleClick} className={className}>{title}</a>
  )
}
