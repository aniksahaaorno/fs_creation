import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { teamData } from '../data/team';
import './Team.css';

const Team = ({ layout = 'carousel' }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const getImageUrl = (name) => {
        return new URL(`../assets/team/${name}`, import.meta.url).href;
    };

    if (layout === 'grid') {
        return (
            <section id="team" className="section-padding team-section-grid">
                <div className="container">
                    <div className="section-header center">
                        <h2 className="section-title">Meet Our Creative Minds</h2>
                        <p className="section-subtitle">The artists and specialists behind every frame.</p>
                    </div>
                    <div className="team-grid">
                        {teamData.map((member, i) => (
                            <motion.div
                                key={i}
                                className="team-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: (i % 4) * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="member-img-wrapper">
                                    <img
                                        src={getImageUrl(member.image)}
                                        alt={member.name}
                                        className="member-img-full"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/300x400?text=FS+Team';
                                        }}
                                    />
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <span className="role">{member.role}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="section-padding team-section-slider">
            <div className="container">
                <div className="section-header flex-between">
                    <div>
                        <h2 className="section-title">Creative Collective</h2>
                        <p className="section-subtitle">Our best minds at your service.</p>
                    </div>
                    <div className="slider-controls">
                        <button className="slider-btn prev" onClick={() => scroll('left')}>
                            <ChevronLeft size={24} />
                        </button>
                        <button className="slider-btn next" onClick={() => scroll('right')}>
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="team-slider-container" ref={scrollRef}>
                    <div className="team-slider-track">
                        {teamData.map((member, i) => (
                            <div key={i} className="team-slider-item">
                                <div className="team-card">
                                    <div className="member-img-wrapper">
                                        <img
                                            src={getImageUrl(member.image)}
                                            alt={member.name}
                                            className="member-img-full"
                                            onError={(e) => {
                                                e.target.src = 'https://via.placeholder.com/300x400?text=FS+Team';
                                            }}
                                        />
                                    </div>
                                    <div className="member-info">
                                        <h3>{member.name}</h3>
                                        <span className="role">{member.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
