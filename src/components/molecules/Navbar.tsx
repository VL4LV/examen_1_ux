import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSearch, FaFlag, FaUserCircle } from 'react-icons/fa';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Negro con 70% de opacidad
        padding: '0 2rem',
        height: '60px',
        backdropFilter: 'blur(4px)', // Efecto de desenfoque como HBO
      }}
    >
      <Container fluid className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Navbar.Brand href="#" className="me-3">
          <img
            src="/imagenes/max_logo_nav.png"
            alt="Logo"
            style={{ height: '40px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-center">
          {/* Menu centrado */}
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Series</Nav.Link>
            <Nav.Link href="#">Películas</Nav.Link>
            <Nav.Link href="#">HBO</Nav.Link>
            <Nav.Link href="#">Niños y Familia</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Iconos a la derecha */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <FaSearch style={{ cursor: 'pointer', color: 'white', fontSize: '20px' }} />
          <FaFlag style={{ cursor: 'pointer', color: 'white', fontSize: '20px' }} />
          <FaUserCircle style={{ cursor: 'pointer', color: 'white', fontSize: '24px' }} />
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
