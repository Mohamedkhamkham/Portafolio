import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import IronFootballImage from '../../assets/Iron-football.png';
import ShareCarImage from '../../assets/Share-Car.png';
import IronSlug from '../../assets/Iron-Slug.png';
import './Projects.css';

const Projects = () => {
    const projectData = [
        {
            title: 'ShareCare',
            description: 'Descripción',
            imageUrl: ShareCarImage
        },
        {
            title: 'IronSlug',
            description: 'Descripción',
            imageUrl: IronSlug
        },
        {
            title: 'Iron-Football',
            description: 'Descripción',
            imageUrl: IronFootballImage
        }
    ];

    return (
        <Container>
            <h1>Proyectos Recomendados</h1>
            <div className="project-row">
                {projectData.map((project, index) => (
                    <Card key={index} className="project-card">
                        <Card.Img variant="top" src={project.imageUrl} />
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default Projects;
