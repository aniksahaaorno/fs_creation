import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import showreelImg from '../assets/showreel.png';
import { projects, categories } from '../data/projects';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="work" className="section-padding portfolio-section">
            <div className="container">
                <motion.div
                    className="showreel-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="showreel-wrapper">
                        <img src={showreelImg} alt="FS Creation Showreel" className="showreel-cover" />
                        <div className="play-overlay">
                            <button className="play-btn">
                                <Play size={40} fill="currentColor" />
                            </button>
                            <span className="play-text">Watch 2026 Showreel</span>
                        </div>
                    </div>
                </motion.div>

                <div className="portfolio-header">
                    <h2 className="section-title">Selected Works</h2>
                    <div className="filter-btns">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="portfolio-grid">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="portfolio-item"
                            >
                                <div className="portfolio-img-wrapper">
                                    <img src={project.img} alt={project.title} />
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-info">
                                            <span className="client">{project.client}</span>
                                            <h3>{project.title}</h3>
                                            <span className="category">{project.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
