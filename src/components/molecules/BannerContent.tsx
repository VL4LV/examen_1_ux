import React from 'react';
import Button from '../atoms/button';

interface BannerContentProps {
  title: string;
  description?: string;
  age?: string;
  category?: string;
  seasons?: string;
}

const BannerContent: React.FC<BannerContentProps> = ({ title, description, age, category, seasons }) => {
  const contentStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20%',
    left: '5%',
    color: 'white',
    maxWidth: '600px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  const infoContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '0.9rem',
    opacity: 0.8,
    marginBottom: '1rem',
    alignItems: 'center',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '1rem',
    marginBottom: '1rem',
  };

  return (
    <div style={contentStyle}>
      <h1 style={titleStyle}>{title}</h1>

      
      <div style={infoContainerStyle}>
        {age && <span>{age}</span>}
        {category && <span>{category}</span>}
        {seasons && <span>{seasons}</span>}
        </div>

      {description && <p style={descriptionStyle}>{description}</p>}

      <Button text="Ir a la serie" onClick={() => alert('Ir a la serie...')} />
    </div>
  );
};

export default BannerContent;
