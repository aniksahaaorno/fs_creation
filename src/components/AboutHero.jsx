import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ws1 from '../assets/work_space01.jpg';
import ws2 from '../assets/work_space02.jpg';
import ws3 from '../assets/work_space03.jpg';
import './AboutHero.css';

const images = [ws1, ws2, ws3];

const AboutHero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section className="about-hero">
            <div className="about-hero-bg">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={current}
                        src={images[current]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5 }}
                        className="about-hero-img"
                    />
                </AnimatePresence>
                <div className="about-hero-overlay"></div>
            </div>

            <div className="container about-hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="about-hero-title">Inside FS Creation</h1>
                    <p className="about-hero-subtitle">Step into the creative heart of our animation studio.</p>
                </motion.div>
            </div>

            <div className="about-hero-nav">
                <button onClick={prev}><ChevronLeft /></button>
                <div className="hero-dots">
                    {images.map((_, i) => (
                        <div key={i} className={`hero-dot ${i === current ? 'active' : ''}`}></div>
                    ))}
                </div>
                <button onClick={next}><ChevronRight /></button>
            </div>
        </section>
    );
};

export default AboutHero;
