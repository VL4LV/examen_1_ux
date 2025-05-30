import React from 'react';
import CarouselRow from '../molecules/CarouselRow';

const FeaturedCarousel: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '20px',
    color: 'white',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const sampleItems = [
    {
      image: 'https://picsum.photos/id/1011/400/200',
      title: 'El misterio 1',
    },
    {
      image: 'https://picsum.photos/id/1012/400/200',
      title: 'El misterio 2',
    },
    {
      image: 'https://picsum.photos/id/1013/400/200',
      title: 'El misterio 3',
    },
    {
      image: 'https://picsum.photos/id/1014/400/200',
      title: 'El misterio 4',
    },
    {
      image: 'https://picsum.photos/id/1015/400/200',
      title: 'El misterio 5',
    },
    {
      image: 'https://picsum.photos/id/1016/400/200',
      title: 'El misterio 6',
    },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Contenido destacado</h2>
      <CarouselRow items={sampleItems} />
    </section>
  );
};

export default FeaturedCarousel;

