import React from 'react';
import { MoreVertical } from 'lucide-react'; 

interface CarouselItem {
  image: string;
  title: string;
}

interface CarouselRowProps {
  items: CarouselItem[];
}

const CarouselRow: React.FC<CarouselRowProps> = ({ items }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    overflowX: 'auto', 
    gap: '16px',
    paddingBottom: '10px',
    scrollbarWidth: 'none', 
  };

  const itemStyle: React.CSSProperties = {
    position: 'relative',
    minWidth: '220px', 
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#1c1c1c',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '130px',
    objectFit: 'cover',
  };

  const titleStyle: React.CSSProperties = {
    padding: '8px',
    fontSize: '0.9rem',
  };

  const menuButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: 'rgba(0,0,0,0.6)',
    border: 'none',
    borderRadius: '50%',
    padding: '4px',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {items.map((item, index) => (
        <div key={index} style={itemStyle}>
          <img src={item.image} alt={item.title} style={imageStyle} />
          <button style={menuButtonStyle} onClick={() => alert(`Opciones para "${item.title}"`)}>
            <MoreVertical size={18} />
          </button>
          <div style={titleStyle}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CarouselRow;
