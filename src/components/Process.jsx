import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Layout, Film, Package } from 'lucide-react';
import './Process.css';

const steps = [
    { icon: <Search />, title: 'Discovery & Script', desc: 'We dig deep to understand your goals and craft a compelling narrative structure.' },
    { icon: <Layout />, title: 'Storyboard', desc: 'Sketching the blueprint. Every shot is planned for maximum impact.' },
    { icon: <PenTool />, title: 'Design & Illustration', desc: 'Creating the visual style, characters, and environments that define your look.' },
    { icon: <Film />, title: 'Animation', desc: 'Bringing it all to life with smooth motion, expressions, and timing.' },
    { icon: <Package />, title: 'Sound & Delivery', desc: 'Final polish with sound design, mixing, and formatting for all platforms.' },
];

const Process = () => {
    return (
        <section id="process" className="section-padding process-section">
            <div className="container">
                <div className="section-header center">
                    <h2 className="section-title">Our Process</h2>
                    <p className="section-subtitle">From Chaos to Cinema</p>
                </div>

                <div className="process-steps-container">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process-step-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="step-number-bg">0{index + 1}</div>
                            <div className="step-icon-box">
                                {step.icon}
                                <div className="step-glow"></div>
                            </div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="step-connector">
                                    <svg width="100%" height="20" viewBox="0 0 100 20" fill="none">
                                        <path d="M0 10H100" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
