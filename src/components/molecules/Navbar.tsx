import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch, FaFlag, FaUserCircle } from 'react-icons/fa'; // react-icons

const CustomNavbar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      bg="transparent"
      variant="dark"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 2rem',
        height: '60px', // altura fija para centrar verticalmente
      }}
    >
      <Container fluid className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src="/imagenes/max_logo_nav.png" alt="Logo" style={{ height: '40px' }} />
        </Navbar.Brand>

        {/* Aquí el menu */}
        <Nav className="d-flex align-items-center gap-4">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Series</Nav.Link>
          <Nav.Link href="#">Películas</Nav.Link>
          <Nav.Link href="#">HBO</Nav.Link>
          <Nav.Link href="#">Niños y Familia</Nav.Link>
        </Nav>

        {/* Iconos al lado derecho */}
        <div className="d-flex align-items-center gap-3">
          <FaSearch style={{ cursor: 'pointer', color: 'white', fontSize: '20px' }} />
          <FaFlag style={{ cursor: 'pointer', color: 'white', fontSize: '20px' }} />
          <FaUserCircle style={{ cursor: 'pointer', color: 'white', fontSize: '24px' }} />
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
