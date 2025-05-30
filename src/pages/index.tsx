import React from 'react';
import Banner from '../components/organisms/Banner';
import Navbar from '../components/molecules/Navbar';
import FeaturedCarousel from '../components/organisms/FeaturedCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Navbar /> 
      <Banner />
      <FeaturedCarousel />
    </div>
  );
};

export default Home;
