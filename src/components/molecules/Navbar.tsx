import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav style={{ 
        backgroundColor: 'transparent !important', 
        boxShadow: 'none', 
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '20px',
        alignItems: 'center',
    }}>
      <Link href="/" legacyBehavior>
        <a style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</a>
      </Link>
      <Link href="/series" legacyBehavior>
        <a style={{ color: 'white', textDecoration: 'none' }}>Series</a>
      </Link>
      <Link href="/peliculas" legacyBehavior>
        <a style={{ color: 'white', textDecoration: 'none' }}>Películas</a>
      </Link>
      <Link href="/hbo" legacyBehavior>
        <a style={{ color: 'white', textDecoration: 'none' }}>HBO</a>
      </Link>
      <Link href="/ninos-familia" legacyBehavior>
        <a style={{ color: 'white', textDecoration: 'none' }}>Niños y Familia</a>
      </Link>
    </nav>
  );
};

export default NavBar;
