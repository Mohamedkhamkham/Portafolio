import { Nav } from 'react-bootstrap';

function Navigation({ setActiveSection }) {
    return (
        <Nav activeKey="/">
            <Nav.Link onClick={() => setActiveSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('projects')}>Proyectos</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('contact')}>Contacto</Nav.Link>
            <Nav.Link onClick={() => setActiveSection('cv')}>CV</Nav.Link>
        </Nav>
    );
}

export default Navigation;
