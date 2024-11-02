import React from 'react';
import Carousel from '../../components/Carousel/Carousel'
import nodejs from '../../assets/nodejs.png'
import MongoDB from '../../assets/MongoDB.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bootstrap from '../../assets/bootstrap.png'

const images = [
    { src: nodejs, alt: 'nodejs' },
    { src: MongoDB, alt: 'MongoDB' },
    { src: html, alt: 'html' },
    { src: css, alt: 'css' },
    { src: javascript, alt: 'javascript' },
    { src: react, alt: 'react' },
    { src: bootstrap, alt: 'bootstrap' },
];

function Skills() {
    return (
        <div className="skills-section">
            <h1>Skills</h1>
            <Carousel images={images} />
        </div>
    );
}

export default Skills
