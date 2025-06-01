import React from 'react';
import { Carousel } from 'react-bootstrap';
import BannerContent from '../molecules/BannerContent';

const bannerItems = [
    {
        image: '/imagenes/just like.jpg',
        title: 'And just like that..',
        description: 'El regreso de los personajes más iconicos de Sex and the City y de su dedicado equipo',
        age: '16+',
        categoria: 'Comedia',
        temporadas: '3 temporadas'
    },
    {
        image: '/imagenes/duster.jpg',
        title: 'Duster',
        description: 'La primera agente afroamericana del FBI se dirige al suroeste y contrata a un valiente piloto de escape.',
        age: '16+',
        categoria: 'Crimen',
        temporadas: '1 temporadas',
    },
    {
        image: '/imagenes/rick and morty.jpg',
        title: 'Rick and Morty',
        description: 'Esta animación enseña a respetar a los mayores, aún si se trata de un alcohólico peligroso...',
        age: '16+',
        categoria: 'Comedia',
        temporadas: '8 temporadas',
    },
    {
        image: '/imagenes/the last.png',
        title: 'The Last of us',
        description: 'HBO presenta una serie posapocalíptica inspirada en el aclamado videojuego que sigue ña brutal historia de Joel y Ellie.',
        age: '18+',
        categoria: 'Fantasía y Ciencia Ficcíon',
        temporadas: '2 temporadas',
    },
    {
        image: '/imagenes/mick.jpg',
        title: 'Mickey 17',
        description: 'Bong Joon Ho dirige a Robert Pattinson en esta comedia negra de ciencia ficción sobre un clon desechable llamado Mickey.',
        age: '16+',
        categoria: 'Comedia',
        temporadas: '3 temporadas',
    },
    {
        image: '/imagenes/white.jpg',
        title: 'The White Lotus',
        description: 'Una sátira de la vida de los ricos y famosos en un resort de lujo, donde las apariencias engañan y los secretos se revelan.',
        age: '16+',
        categoria: 'Comedia',
        temporadas: '3 temporadas',
    },
];

const Banner: React.FC = () => {
    return (
        <div style={{ position: 'relative', overflowX: 'hidden' }}> 
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
                        <BannerContent
                            title={item.title}
                            description={item.description}
                            age={item.age}
                            category={item.categoria}
                            seasons={item.temporadas}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
