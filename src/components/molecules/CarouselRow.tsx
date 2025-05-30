import React from 'react';
import Thumbnail from '../atoms/Thumbnail';

interface CarouselRowProps {
  items: { image: string; title: string; description?: string }[]; 
}

const CarouselRow: React.FC<CarouselRowProps> = ({ items }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'auto',
    padding: '10px 0',
  };

  return (
    <div style={containerStyle}>
      {items.map((item, index) => (
        <Thumbnail
          key={index}
          image={item.image}
          title={item.title}
          description={item.description} 
        />
      ))}
    </div>
  );
};

export default CarouselRow;

