import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Studio.css';

const testimonials = [
    { text: "FS Creation transformed our brand. The animation was not just beautiful, it drove real results.", author: "Mark Thompson, CEO TechFlow (USA)" },
    { text: "Professional, creative, and on time. A world-class studio experience.", author: "Liu Wei, Marketing Director (Singapore)" }
];

const Studio = () => {
    return (
        <>
            {/* Vision & Mission */}
            <section className="section-padding vision-section">
                <div className="container center-text">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="vision-box"
                    >
                        <h2>Our Vision</h2>
                        <p className="vision-text">To become a globally recognized 2D animation studio that transforms ideas into unforgettable visual stories.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mission-box"
                    >
                        <h3>Our Mission</h3>
                        <p>To deliver high-quality, creative, and impactful animation that connects brands with audiences worldwide.</p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding testimonials-section">
                <div className="container">
                    <h2 className="section-title center">Client Trust</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                className="testimonial-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Quote size={40} className="quote-icon" />
                                <p className="quote-text">"{t.text}"</p>
                                <div className="author-info">
                                    <cite>{t.author}</cite>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Studio;
