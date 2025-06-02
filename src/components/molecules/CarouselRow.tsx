import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight, BsThreeDotsVertical } from 'react-icons/bs';

interface CarouselRowProps {
  items: { image: string; title: string }[];
}

const BootstrapCarouselRow: React.FC<CarouselRowProps> = ({ items }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="position-relative py-3">
      {/* Flecha izquierda */}
      <Button
        variant="dark"
        className="position-absolute top-50 start-0 translate-middle-y z-3"
        onClick={() => scroll('left')}
        style={{ opacity: 0.7 }}
      >
        <BsChevronLeft />
      </Button>

      {/* Carrusel de tarjetas */}
      <div
        ref={scrollRef}
        className="d-flex overflow-auto px-4"
        style={{ scrollBehavior: 'smooth', gap: '1rem', scrollbarWidth: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="card bg-dark text-white position-relative"
            style={{ minWidth: '200px', flex: '0 0 auto' }}
          >
            {/* Imagen */}
            <img src={item.image} className="card-img" alt={item.title} />

            {/* Titulo y fondo degradado */}
            <div
              className="card-img-overlay d-flex flex-column justify-content-end p-2"
              style={{
                background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))',
              }}
            >
              <h6 className="card-title mb-0">{item.title}</h6>
            </div>

            {/* Boton de tres puntos verticales */}
            <Button
              variant="dark"
              size="sm"
              className="position-absolute top-0 end-0 m-1 p-1"
              style={{ borderRadius: '50%', opacity: 0.8 }}
            >
              <BsThreeDotsVertical />
            </Button>
          </div>
        ))}
      </div>

      {/* Flecha derecha */}
      <Button
        variant="dark"
        className="position-absolute top-50 end-0 translate-middle-y z-3"
        onClick={() => scroll('right')}
        style={{ opacity: 0.7 }}
      >
        <BsChevronRight />
      </Button>
    </div>
  );
};

export default BootstrapCarouselRow;
