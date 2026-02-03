import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutComp from '../components/About';
import Studio from '../components/Studio';
import Team from '../components/Team';

const About = () => {
    return (
        <div className="about-page" style={{ background: 'var(--bg-dark)' }}>
            <AboutHero />
            <AboutComp />
            <Team layout="grid" />
            <Studio />
        </div>
    );
};

export default About;
