import React from 'react';
import { Carousel } from 'react-bootstrap';
import BannerContent from '../molecules/BannerContent';

const bannerItems = [
    {
        image: '/imagenes/just like.jpg',
        title: 'And just like that..',
    },
    {
        image: '/imagenes/duster.jpg',
        title: 'Duster',
    },
    {
        image: '/imagenes/rick and morty.jpg',
        title: 'Riack and Morty',
    },
    {
        image: '/imagenes/the last.png',
        title: 'The Last of us',
    },
    {
        image: '/imagenes/mick.jpg',
        title: 'Mickey 17',
    },
    {
        image: '/imagenes/white.jpg',
        title: 'The White Lotus',
    },
];

const Banner: React.FC = () => {
    return (
        <div style={{ position: 'relative' }}>

            <Carousel fade controls indicators interval={5000}>
                {bannerItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.image}
                            alt={`Slide ${index}`}
                            style={{ height: '90vh', objectFit: 'cover' }}
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
