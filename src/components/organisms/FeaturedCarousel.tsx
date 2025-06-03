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
    textAlign: 'left',
    fontWeight: 'bold',
  };

  const sampleItems = [
    {
      image: '/imagenes/insideous.jpg',
      title: 'La noche del demonio 3',
    },
    {
      image: '/imagenes/gumball.jpg',
      title: 'The Amazing World of Gumball',
    },
    {
      image: '/imagenes/regShow.jpg',
      title: 'Regular Show',
      isNew: true,
    },
    {
      image: '/imagenes/fnaf.jpg',
      title: 'Five Nights at Freddy\'s',
    },
    {
      image: '/imagenes/openpli.jpg',
      title: 'Oppenheimer',
    },
    {
      image: '/imagenes/office.jpg',
      title: 'The Office',
    },
    {
      image: '/imagenes/venom.jpg',
      title: 'Venom El ultimo Baile',
    },
    {
      image: '/imagenes/it.jpg',
      title: 'It',
    },
    {
      image: '/imagenes/deepfear.jpg',
      title: 'Miedo Profundo',
      isNew: true,
    },
  ];

  const continueWatchingItems = [
    {
      image: '/imagenes/RnM.jpg',
      title: 'Rick and Morty',
      age: '18+',
      year: '2023',
      categoria: 'Comedy/Sci-Fi',
      progress: 15,
      description: 'Una serie animada sobre aventuras cómicas y científicas de Rick y su nieto Morty.',
    },
    {
      image: '/imagenes/Barbie.jpg',
      title: 'Barbie',
      age: '10+',
      year: '2023',
      categoria: 'Comedy/Fantasy',
      progress: 55,
      description: 'Película de fantasía y comedia para toda la familia con la icónica muñeca Barbie.',
    },
    {
      image: '/imagenes/Dandadan.jpg',
      title: 'Dandadan',
      age: '13+',
      year: '2022',
      categoria: 'Anime/Action',
      isNew: true,
      progress: 75,
      description: 'Un anime lleno de acción y elementos sobrenaturales, con personajes entrañables y peleas épicas.',
    },
  ];

  const top10Items = [
    {
      image: '/imagenes/TLOU2.webp',
      title: 'Top 1',
      isNew: true,
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
    { image: '/imagenes/Noragami.jpg', title: 'Noragami', isNew: true },
    { image: '/imagenes/Dandadan.jpg', title: 'Dandadan' },
    { image: '/imagenes/BloodLad.jpg', title: 'Blood Lad' },
    { image: '/imagenes/onePiece.jpg', title: 'One Piece' },
    { image: '/imagenes/HP.png', title: 'Hells Paradise' },
    { image: '/imagenes/overlord.jpg', title: 'Overlord' },
    { image: '/imagenes/Getbackers.jpg', title: 'Get Backers' },
    { image: '/imagenes/farawayPala.jpg', title: 'The Faraway Paladin' },
    { image: '/imagenes/Hsing.jpg', title: 'Hellsing' },
    { image: '/imagenes/Inuyashiki.jpg', title: 'Inuyashiki', isNew: true },
    { image: '/imagenes/MahoYome.jpg', title: 'Mahoutsukai no yome' },
    { image: '/imagenes/SL.png', title: 'Solo Leveling' },
    { image: '/imagenes/BNA.jpg', title: 'BNA' },
    { image: '/imagenes/Toradora.jpg', title: 'Toradora' },
  ];


  const comediaItems = [
    { image: '/imagenes/GemStones.jpg', title: 'The Righteous Gemstones' },
    { image: '/imagenes/VEEP.jpg', title: 'VEEP' },
    { image: '/imagenes/RnM.jpg', title: 'Rick and Morty' },
    { image: '/imagenes/CurbYE.jpg', title: 'Curb Your Enthusiasm' },
    { image: '/imagenes/Barbie.jpg', title: 'Barbie', isNew: true },
    { image: '/imagenes/eastbound.jpg', title: 'Eastbound & Down' },
    { image: '/imagenes/flightcon.jpg', title: 'Flight of the Conchords' },
    { image: '/imagenes/hacks3.jpg', title: 'Hacks' },
    { image: '/imagenes/boreddeath.jpg', title: 'Bored to Death', isNew: true },
    { image: '/imagenes/EEAAO.jpg', title: 'Everything Everywhere all at Once' },
  ];

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Destacados</h2>
      <CarouselRow items={sampleItems} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Continúa viendo</h2>
      <CarouselRow items={continueWatchingItems} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Top 10 Hoy</h2>
      <CarouselRow items={top10Items} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Solo para ti</h2>
      <CarouselRow items={soloParaTiItems} />

      <h2 style={{ ...titleStyle, marginTop: '30px' }}>Comedia</h2>
      <CarouselRow items={comediaItems} />
    </section>
  );
};

export default FeaturedCarousel;
