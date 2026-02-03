import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Facebook, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">FS Creation<span className="dot">.</span></Link>
                        <p className="footer-desc">
                            Bringing stories to life through world-class 2D animation. We blend creativity with technical mastery to deliver impactful visual narratives.
                        </p>
                        <div className="footer-socials">
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Studio</Link></li>
                            <li><Link to="/services">Our Services</Link></li>
                            <li><Link to="/work">Portfolio</Link></li>
                        </ul>
                    </div>

                    <div className="footer-services">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">2D Animation</Link></li>
                            <li><Link to="/services">Explainer Videos</Link></li>
                            <li><Link to="/services">Motion Graphics</Link></li>
                            <li><Link to="/services">Character Design</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Get in Touch</h4>
                        <div className="contact-item">
                            <Mail size={18} className="footer-icon" />
                            <span>hello@fscreation.com</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} className="footer-icon" />
                            <span>+880 1234 567 890</span>
                        </div>
                        <div className="contact-item">
                            <MapPin size={18} className="footer-icon" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} FS Creation. All rights reserved.</p>
                    </div>
                    <div className="footer-policy">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                    <button className="back-to-top" onClick={scrollToTop}>
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
