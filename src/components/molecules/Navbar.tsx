import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar: React.FC = () => {
  return (
    <Navbar
      expand="lg"
      bg="transparent"
      variant="dark"
      className="w-100 px-4"
      style={{
        position: 'absolute', // o 'fixed' si quieres que se quede al hacer scroll
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Navbar.Brand href="#">
        <img src="/imagenes/max_logo_nav.png" alt="Logo" style={{ height: '40px' }} />
      </Navbar.Brand>
      <Nav className="ms-auto gap-4">
        <Nav.Link href="#">Inicio</Nav.Link>
        <Nav.Link href="#">Series</Nav.Link>
        <Nav.Link href="#">Películas</Nav.Link>
        <Nav.Link href="#">HBO</Nav.Link>
        <Nav.Link href="#">Niños y Familia</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
