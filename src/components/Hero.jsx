import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Import videos
import heroVideo1 from '../assets/videos/herosection01.mp4';
import heroVideo2 from '../assets/videos/herosection02.mp4';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const videos = [heroVideo1, heroVideo2];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % videos.length);
        }, 8000); // Change slide every 8 seconds
        return () => clearInterval(timer);
    }, [videos.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    };

    return (
        <section className="hero">
            <div className="hero-video-container">
                <video
                    key={currentSlide}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src={videos[currentSlide]} type="video/mp4" />
                </video>

            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div >
                        <Link to="/work" className="btn btn-primary">
                            View Our Work <Play size={18} fill="currentColor" />
                        </Link>
                        <a href="#contact" className="btn btn-outline">
                            Work With Us <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="hero-slider-controls">
                <button onClick={prevSlide} className="slider-btn prev">
                    <ChevronLeft size={24} />
                </button>
                <div className="slider-indicators">
                    {videos.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    ))}
                </div>
                <button onClick={nextSlide} className="slider-btn next">
                    <ChevronRight size={24} />
                </button>
            </div>

            <div className="hero-scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
