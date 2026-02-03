import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { projects, categories } from '../data/projects';
import Team from '../components/Team';
import '../components/Portfolio.css';

// Reusing the logic from Portfolio.jsx but as a full page
const Work = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="work-page" style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', background: 'var(--bg-dark)' }}>
            <section className="section-padding portfolio-section">
                <div className="container">
                    <motion.div
                        className="portfolio-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Our Work</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                            Explore our latest projects across animation, motion graphics, and storytelling.
                        </p>

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
                    </motion.div>

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

            <Team />
        </div>
    );
};

export default Work;
