import React from 'react';
import nodejs from '../../assets/nodejs.png'
import mongo from '../../assets/mongo.jpg'
import html from '../../assets/html.png'
import css from '../../assets/css-.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import bootstrap from '../../assets/bootstrap.png'
import MyCarousel from '../../components/Carousel/MyCarousel';

const images = [
    { src: nodejs, alt: 'nodejs' },
    { src: mongo, alt: 'mongo' },
    { src: html, alt: 'html' },
    { src: css, alt: 'css' },
    { src: javascript, alt: 'javascript' },
    { src: react, alt: 'react' },
    { src: bootstrap, alt: 'bootstrap' },
];

function Skills() {
    return (
        <div className="skills-section">
            <MyCarousel images={images} />
        </div>
    );
}

export default Skills
