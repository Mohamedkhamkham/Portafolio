import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link as ScrollLink } from 'react-scroll'
import './Navegation.css'
import logo from '../../assets/88ipIkbEsTaBf.png!sw800.png'
import cvPDF from '../../assets/Moha.pdf'

function Navigation() {
    const [activeItem, setActiveItem] = useState(null);

    const handleMouseEnter = (item) => {
        setActiveItem(item);
    };

    const handleMouseLeave = () => {
        setActiveItem(null);
    };

    return (
        <Navbar className="navbar-fixed" expand="lg" onMouseLeave={handleMouseLeave}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item
                            onMouseEnter={() => handleMouseEnter('skills')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Nav.Link className="nav-link-item" as={ScrollLink} to="skills" smooth={true} duration={500}>
                                Skills
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            onMouseEnter={() => handleMouseEnter('proyectos')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Nav.Link className="nav-link-item" as={ScrollLink} to="proyectos" smooth={true} duration={500}>
                                Proyectos
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link-item" href={cvPDF} target="_blank" rel="noopener noreferrer">
                                CV
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            onMouseEnter={() => handleMouseEnter('contactos')}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Nav.Link className="nav-link-item" as={ScrollLink} to="contactos" smooth={true} duration={500}>
                                Contactos
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation
