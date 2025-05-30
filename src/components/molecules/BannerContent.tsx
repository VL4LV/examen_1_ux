import React from 'react';
import Button from '../atoms/button';

interface BannerContentProps {
  title: string;
}

const BannerContent: React.FC<BannerContentProps> = ({ title }) => {
  const contentStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20%',
    left: '5%',
    color: 'white',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  return (
    <div style={contentStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <Button text="Ir a la serie" onClick={() => alert('Ir a la serie...')} />
    </div>
  );
};

export default BannerContent;
