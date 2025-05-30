import React from 'react';
import { Carousel } from 'react-bootstrap';
import BannerContent from '../molecules/BannerContent';

const bannerItems = [
    {
        image: 'https://picsum.photos/id/1011/1350/600',
        title: 'El Crimen Perfecto',
    },
    {
        image: 'https://picsum.photos/id/1012/1350/600',
        title: 'Misterio en la Montaña',
    },
    {
        image: 'https://picsum.photos/id/1013/1350/600',
        title: 'Sombras del Pasado',
    },
    {
        image: 'https://picsum.photos/id/1014/1350/600',
        title: 'Código Mortal',
    },
    {
        image: 'https://picsum.photos/id/1015/1350/600',
        title: 'El Último Susurro',
    },
    {
        image: 'https://picsum.photos/id/1016/1350/600',
        title: 'Evidencia Oculta',
    },
];

const Banner: React.FC = () => {
    return (
        <div style={{ position: 'relative' }}>
            {/* Logo de Max */}
            <img
                src="/imagenes/max_logo_nav.png"
                alt="Max Logo"
                style={{
                    height: '40px',
                    position: 'absolute',
                    top: '20px',
                    left: '30px',
                    zIndex: 10,
                }}
            />

            <Carousel fade controls indicators interval={5000}>
                {bannerItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={`Slide ${index}`}
                            style={{ height: '60vh', objectFit: 'cover' }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                background:
                                    'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))',
                            }}
                        />
                        <BannerContent title={item.title} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
