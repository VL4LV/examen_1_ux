import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight, BsThreeDotsVertical, BsPlayFill } from 'react-icons/bs';

interface CarouselRowProps {
  items: {
    image: string;
    title: string;
    age?: string;
    year?: string;
    isNew?: boolean;
    progress?: number;
    description?: string;
  }[];
  className?: string;
}

const BootstrapCarouselRow: React.FC<CarouselRowProps> = ({ items, className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <div
      className={`position-relative py-3 text-white ${className || ''}`}
      style={{ backgroundColor: '#000000' }}
    >
      {/* boton izquierda */}
      <Button
        variant="dark"
        className="position-absolute top-50 start-0 translate-middle-y z-3"
        onClick={() => scroll('left')}
        style={{ opacity: 0.7 }}
      >
        <BsChevronLeft />
      </Button>

      {/* Contenedor de tarjetas */}
      <div
        ref={scrollRef}
        className="d-flex overflow-auto px-4"
        style={{ scrollBehavior: 'smooth', gap: '1rem', scrollbarWidth: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="d-flex flex-column"
            style={{ minWidth: '200px', flex: '0 0 auto' }}
          >
            <div
              className="position-relative"
              style={{ borderRadius: '8px', overflow: 'hidden' }}
            >
              {/* Etiqueta "Nuevo" */}
              {item.isNew && (
                <div
                  className="position-absolute top-0 start-0 bg-white text-dark px-2 py-1"
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 'bold',
                    borderBottomRightRadius: '8px',
                    border: '1px solid rgba(0,0,0,0.1)',
                    zIndex: 2,
                  }}
                >
                  Nuevo
                </div>
              )}

              {/* Imagen */}
              <div style={{ width: '200px', height: '300px', overflow: 'hidden', borderRadius: '8px' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // clave para que no se deforme
                  }}
                />
              </div>

              {/* Overlay opcional con play y progress */}
              {typeof item.progress === 'number' && (
                <div
                  className="position-absolute bottom-0 start-0 end-0 p-2 d-flex flex-column"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                  }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <BsPlayFill
                      style={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    />
                    <div className="flex-grow-1 bg-secondary rounded" style={{ height: '6px' }}>
                      <div
                        className="bg-white rounded"
                        style={{
                          height: '100%',
                          width: `${item.progress}%`,
                          transition: 'width 0.3s',
                        }}
                      />
                    </div>
                  </div>
                  {activeIndex === index && item.description && (
                    <div className="mt-2 p-2 bg-dark rounded" style={{ fontSize: '0.85rem' }}>
                      {item.description}
                    </div>
                  )}
                </div>
              )}

              {/* boton de opciones */}
              <Button
                variant="light"
                size="sm"
                className="position-absolute top-0 end-0 m-1 p-1"
                style={{ borderRadius: '50%', opacity: 0.8, zIndex: 2 }}
              >
                <BsThreeDotsVertical />
              </Button>
            </div>

            {/* titulo + edad + año DEBAJO de la imagen */}
            <div className="mt-2 px-1 text-white text-start">
              <div className="fw-bold" style={{ fontSize: '0.95rem' }}>
                {item.title}
              </div>
              {(item.age || item.year) && (
                <div className="text-white-50" style={{ fontSize: '0.85rem' }}>
                  {item.age} {item.year && `| ${item.year}`}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* boton derecha */}
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
