import React from 'react';

interface ThumbnailProps {
  image: string;
  title: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ image, title }) => {
  const style: React.CSSProperties = {
    width: '180px',
    height: '100px',
    marginRight: '10px',
    borderRadius: '5px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  };

  const hoverStyle: React.CSSProperties = {
    transform: 'scale(1.05)',
  };

  return (
    <div
      style={style}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = hoverStyle.transform!;
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
      }}
      title={title}
    />
  );
};

export default Thumbnail;
