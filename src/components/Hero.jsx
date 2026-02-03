import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-gradient"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-eyebrow">Creative 2D Animation Studio</span>
                    <h1 className="hero-title">
                        We Bring Stories to Life <br />
                        <span className="highlight">Through 2D Animation.</span>
                    </h1>
                    <p className="hero-text">
                        FS Creation is a world-class animation studio extracting emotional narratives from ideas and crafting them into stunning visuals.
                    </p>

                    <div className="hero-btns">
                        <Link to="/work" className="btn btn-primary">
                            View Our Work <Play size={18} fill="currentColor" />
                        </Link>
                        <a href="#contact" className="btn btn-outline">
                            Work With Us <ArrowRight size={18} />
                        </a>
                    </div>
                </motion.div>
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
