import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Studio from '../components/Studio';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Process />
            <Team layout="carousel" />
            <Studio />
            <Contact />
        </>
    );
};

export default Home;
