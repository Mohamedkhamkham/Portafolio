import React from 'react';
import { Container, Card } from 'react-bootstrap';
import IronFootballImage from '../../assets/Iron-football.png';
import ShareCarImage from '../../assets/Share-Car.png';
import IronSlug from '../../assets/Iron-Slug.png';
import './Projects.css';

const Projects = () => {
    const projectData = [
        {
            title: 'ShareCare',
            imageUrl: ShareCarImage,
            url: 'https://remarkable-lily-6eca86.netlify.app/'
        },
        {
            title: 'IronSlug',
            imageUrl: IronSlug,
            url: 'https://mohamedkhamkham.github.io/proyect-1/'
        },
        {
            title: 'Iron-Football',
            imageUrl: IronFootballImage,
            url: 'https://iron-foot.fly.dev/'
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
                            {project.url && (
                                <Card.Link
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Proyecto
                                </Card.Link>
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default Projects;
