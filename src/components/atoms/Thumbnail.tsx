import React from 'react';

interface ThumbnailProps {
  image: string;
  title: string;
  description?: string; 
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image, title, description }) => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    margin: '10px',
  };

  const imageStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  };

  return (
    <div style={containerStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <h4>{title}</h4>
      {description && <p>{description}</p>} 
    </div>
  );
};

export default Thumbnail;
