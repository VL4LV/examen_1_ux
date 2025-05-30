import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const defaultBackgroundColor = 'rgba(255, 255, 255, 0.2)';
  const hoverBackgroundColor = 'rgba(255, 255, 255, 0.35)';

  const buttonStyle: React.CSSProperties = {
    padding: '0.8rem 2rem',
    backgroundColor: defaultBackgroundColor,
    border: 'none',
    borderRadius: '25px',
    color: 'white',
    fontWeight: '500',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backdropFilter: 'blur(5px)',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverBackgroundColor;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = defaultBackgroundColor;
      }}
    >
      {text}
    </button>
  );
};

export default Button;
