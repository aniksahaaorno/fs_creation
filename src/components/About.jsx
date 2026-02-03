import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section-padding about-section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title">Bring Your Ideas into Visual Reality</h2>
                        <p className="about-text">
                            We are FS Creation, a collective of dreamers, artists, and technical wizards.
                            Our journey began with a simple belief: that every brand has a soul waiting to be revealed through motion.
                        </p>
                        <p className="about-text">
                            What makes us different isn't just our pixels—it's our process. We dive deep into the heart of your message,
                            finding the human connection that turns viewers into believers. From concept to frame-by-frame perfection,
                            we pour our passion into every second.
                        </p>
                    </motion.div>

                    <motion.div
                        className="experience-highlight"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="experience-box">
                            <span className="exp-number">05+</span>
                            <span className="exp-label">Years of Storytelling Excellence</span>
                        </div>
                        <div className="experience-box">
                            <span className="exp-number">100+</span>
                            <span className="exp-label">Projects Delivered Worldwide</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
