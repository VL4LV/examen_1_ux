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
      image: 'https://picsum.photos/id/1023/400/200',
      title: 'Top 1',
    },
    {
      image: 'https://picsum.photos/id/1024/400/200',
      title: 'Top 2',
    },
    {
      image: 'https://picsum.photos/id/1025/400/200',
      title: 'Top 3',
    },
    {
      image: 'https://picsum.photos/id/1026/400/200',
      title: 'Top 4',
    },
    {
      image: 'https://picsum.photos/id/1027/400/200',
      title: 'Top 5',
    },
    {
      image: 'https://picsum.photos/id/1028/400/200',
      title: 'Top 6',
    },
    {
      image: 'https://picsum.photos/id/1029/400/200',
      title: 'Top 7',
    },
    {
      image: 'https://picsum.photos/id/1030/400/200',
      title: 'Top 8',
    },
    {
      image: 'https://picsum.photos/id/1031/400/200',
      title: 'Top 9',
    },
    {
      image: 'https://picsum.photos/id/1032/400/200',
      title: 'Top 10',
    },
  ];

  const soloParaTiItems = [
    { image: 'https://picsum.photos/id/1033/400/200', title: 'DoroheDoro' },
    { image: 'https://picsum.photos/id/1034/400/200', title: 'Frieren' },
    { image: 'https://picsum.photos/id/1035/400/200', title: 'Noragami' },
    { image: 'https://picsum.photos/id/1036/400/200', title: 'Dandadan' },
    { image: 'https://picsum.photos/id/1037/400/200', title: 'Blood Laf' },
    { image: 'https://picsum.photos/id/1038/400/200', title: 'One Piece' },
    { image: 'https://picsum.photos/id/1039/400/200', title: 'Hells Paradise' },
    { image: 'https://picsum.photos/id/1040/400/200', title: 'Overlord' },
    { image: 'https://picsum.photos/id/1041/400/200', title: 'Get Backers' },
    { image: 'https://picsum.photos/id/1042/400/200', title: 'The Far-Away Paladin' },
    { image: 'https://picsum.photos/id/1043/400/200', title: 'Hellsing' },
    { image: 'https://picsum.photos/id/1044/400/200', title: 'Inuyashiki' },
    { image: 'https://picsum.photos/id/1045/400/200', title: 'Mahoutsukai no yome' },
    { image: 'https://picsum.photos/id/1046/400/200', title: 'Solo Leveling' },
    { image: 'https://picsum.photos/id/1047/400/200', title: 'BNA' },
    { image: 'https://picsum.photos/id/1048/400/200', title: 'Toradora' },
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
      <CarouselRow items={top10Items} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Solo para ti</h2>
      <CarouselRow items={soloParaTiItems} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Comedia</h2>
      <CarouselRow items={comediaItems} />
    </section>
  );
};

export default FeaturedCarousel;
