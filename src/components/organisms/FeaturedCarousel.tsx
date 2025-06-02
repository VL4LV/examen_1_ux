import React from 'react';
import CarouselRow from '../molecules/CarouselRow';



const FeaturedCarousel: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '20px',
    color: 'white',
    overflowX: 'hidden',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const top10TitleStyle: React.CSSProperties = {
    textAlign: 'left' ,
    fontsize: '1.5rem',
    fontWeight: 'bold',
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
    {
      image: 'https://picsum.photos/id/1017/400/200',
      title: 'El misterio 7',
    },
    {
      image: 'https://picsum.photos/id/1018/400/200',
      title: 'El misterio 8',
    },
    {
      image: 'https://picsum.photos/id/1019/400/200',
      title: 'El misterio 9',
    },
  ];

  const continueWatchingItems = [
    {
      image: 'https://picsum.photos/id/1020/400/200',
      title: 'Continuar viendo 1',
    },
    {
      image: 'https://picsum.photos/id/1021/400/200',
      title: 'Continuar viendo 2',
    },
    {
      image: 'https://picsum.photos/id/1022/400/200',
      title: 'Continuar viendo 3',
    }, 
  ];

  const top10Items = [
    {
      image: '/imagenes/TLOU2.webp',
      title: 'Top 1',
    },
    {
      image: '/imagenes/Andjlt.webp',
      title: 'Top 2',
    },
    {
      image: '/imagenes/hobbit.webp',
      title: 'Top 3',
    },
    {
      image: '/imagenes/duster2.webp',
      title: 'Top 4',
    },
    {
      image: '/imagenes/peewee.webp',
      title: 'Top 5',
    },
    {
      image: '/imagenes/mk17.webp',
      title: 'Top 6',
    },
    {
      image: '/imagenes/sherriPap.webp',
      title: 'Top 7',
    },
    {
      image: '/imagenes/hacks.webp',
      title: 'Top 8',
    },
    {
      image: '/imagenes/daPitt.webp',
      title: 'Top 9',
    },
    {
      image: '/imagenes/daWLot.webp',
      title: 'Top 10',
    },
  ];

  const soloParaTiItems = [
    { image: '/imagenes/Dorohedoro.jpg', title: 'DoroheDoro' },
    { image: '/imagenes/Frieren.jpg', title: 'Frieren' },
    { image: '/imagenes/Noragami.jpg', title: 'Noragami' },
    { image: '/imagenes/Dandadan.jpg', title: 'Dandadan' },
    { image: '/imagenes/BloodLad.jpg', title: 'Blood Lad' },
    { image: '/imagenes/onePiece.jpg', title: 'One Piece' },
    { image: '/imagenes/HP.png', title: 'Hells Paradise' },
    { image: '/imagenes/overlord.jpg', title: 'Overlord' },
    { image: '/imagenes/Getbackers.jpg', title: 'Get Backers' },
    { image: '/imagenes/farawayPala.jpg', title: 'The Faraway Paladin' },
    { image: '/imagenes/Hsing.jpg', title: 'Hellsing' },
    { image: '/imagenes/Inuyashiki.jpg', title: 'Inuyashiki' },
    { image: '/imagenes/MahoYome.jpg', title: 'Mahoutsukai no yome' },
    { image: '/imagenes/SL.png', title: 'Solo Leveling' },
    { image: '/imagenes/BNA.jpg', title: 'BNA' },
    { image: '/imagenes/Toradora.jpg', title: 'Toradora' },
  ];

  const comediaItems = [
    { image: 'https://picsum.photos/id/1050/400/200', title: 'Comedia 1' },
    { image: 'https://picsum.photos/id/1051/400/200', title: 'Comedia 2' },
    { image: 'https://picsum.photos/id/1052/400/200', title: 'Comedia 3' },
    { image: 'https://picsum.photos/id/1053/400/200', title: 'Comedia 4' },
    { image: 'https://picsum.photos/id/1054/400/200', title: 'Comedia 5' },
    { image: 'https://picsum.photos/id/1055/400/200', title: 'Comedia 6' },
    { image: 'https://picsum.photos/id/1056/400/200', title: 'Comedia 7' },
    { image: 'https://picsum.photos/id/1057/400/200', title: 'Comedia 8' },
    { image: 'https://picsum.photos/id/1058/400/200', title: 'Comedia 9' },
    { image: 'https://picsum.photos/id/1059/400/200', title: 'Comedia 10' },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Destacados</h2>
      <CarouselRow items={sampleItems} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Continúa viendo</h2>
      <CarouselRow items={continueWatchingItems} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Top 10</h2>
      <CarouselRow items={top10Items} titleStyle={top10TitleStyle}/>

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Solo para ti</h2>
      <CarouselRow items={soloParaTiItems} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Comedia</h2>
      <CarouselRow items={comediaItems} />
    </section>
  );
};

export default FeaturedCarousel;
