import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import TypewriterEffect from '../../components/TypingEffect/TypingEffect.jsx'
import './Home.css';
import backgroundImage from '../../assets/Foto-home.jpeg'
import myPhoto from '../../assets/fotoHome.jpeg'

const Home = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={9}>
                        <div className="text-left">
                            <TypewriterEffect text="Moha" typingDelay={150} className="typing-effect" />
                            <p>Desarrollador Full-Stack con una profunda pasión por la programación y un firme compromiso con la inclusión y la diversidad social.</p>
                            <p>Me encanta crear soluciones tecnológicas que no solo sean eficientes y funcionales, sino que también tengan un impacto positivo en la sociedad.</p>
                            <Button variant="outline-light" className="info-button" onClick={handleShowMore}>
                                {showMore ? 'Mostrar Menos' : 'Más Información'}
                            </Button>
                            {showMore && (
                                <div className={`additional-info ${showMore ? 'visible' : ''}`}>
                                </div>
                            )}
                        </div>
                    </Col>
                    <Col md={3} className="text-right">
                        <img src={myPhoto} alt="Moha" className="profile-photo" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
