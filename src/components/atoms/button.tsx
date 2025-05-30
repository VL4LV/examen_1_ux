import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const defaultBackgroundColor = '#e50914';
  const hoverBackgroundColor = '#f40612';

  const buttonStyle: React.CSSProperties = {
    padding: '0.8rem 2rem',
    backgroundColor: defaultBackgroundColor,
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseOver={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = hoverBackgroundColor;
      }}
      onMouseOut={(e) => {
        (e.target as HTMLButtonElement).style.backgroundColor = defaultBackgroundColor;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
