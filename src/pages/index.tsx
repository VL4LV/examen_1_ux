import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/organisms/Banner';
import Navbar from '../components/molecules/Navbar';
import FeaturedCarousel from '../components/organisms/FeaturedCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>MAX</title>
        <link rel="icon" href="/imagenes/icon.avif" type="image/x-icon" />
      </Helmet>

      <Navbar />

      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <Banner />
        <FeaturedCarousel />
      </div>
    </>
  );
};

export default Home;
