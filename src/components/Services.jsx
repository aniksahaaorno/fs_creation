import React from 'react';
import { motion } from 'framer-motion';
import { User, Video, Activity, PenTool, BookOpen, Smartphone } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <User size={40} />,
        title: "2D Character Animation",
        desc: "Breathing life into characters with personality and emotion that connect with audiences."
    },
    {
        icon: <Video size={40} />,
        title: "Explainer Videos",
        desc: "Simplifying complex ideas into engaging, easy-to-understand visual narratives."
    },
    {
        icon: <Activity size={40} />,
        title: "Motion Graphics",
        desc: "Sleek, dynamic animations that elevate your brand identity and messaging."
    },
    {
        icon: <PenTool size={40} />,
        title: "Storyboarding & Concept",
        desc: "Visualizing the blueprint of your story before a single frame is animated."
    },
    {
        icon: <BookOpen size={40} />,
        title: "Educational Content",
        desc: "Making learning fun and memory-retentive through engaging visual lessons."
    },
    {
        icon: <Smartphone size={40} />,
        title: "Social Media Vibes",
        desc: "Short, punchy loops designed to stop the scroll and drive engagement."
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <div className="section-header center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        className="section-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        We blend creativity with technical mastery to deliver animation that works.
                    </motion.p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
