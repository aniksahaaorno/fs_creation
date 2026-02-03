import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Linkedin, Twitter, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Project Type',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    // এখান আপনার Google Apps Script এর 'Web App URL' টি বসাবেন
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxKg46MvjsfklzDOgcm85QlH274ZdvBcVnYp8GcPoD5PlZtYLidi68wo5zFulR6vBWu/exec';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors for simple fetch
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            setStatus('success');
            setFormData({ name: '', email: '', projectType: 'Project Type', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="section-padding contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Let's Create Something Amazing Together</h2>
                        <p className="contact-sub">Ready to bring your story to life? Contact us today.</p>

                        <div className="info-item">
                            <Mail className="icon" />
                            <span>hello@fscreation.com</span>
                        </div>
                        <div className="info-item">
                            <MapPin className="icon" />
                            <span>123 Creative Ave, Design District, NY</span>
                        </div>

                        <div className="social-links">
                            <a href="#"><Instagram /></a>
                            <a href="#"><Linkedin /></a>
                            <a href="#"><Twitter /></a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                            >
                                <option disabled>Project Type</option>
                                <option>2D Animation</option>
                                <option>Explainer Video</option>
                                <option>Motion Graphics</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Tell us about your project"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? (
                                <><Loader2 className="animate-spin" size={20} /> Sending...</>
                            ) : status === 'success' ? (
                                'Sent Successfully!'
                            ) : status === 'error' ? (
                                'Error! Try Again'
                            ) : (
                                'Send Message'
                            )}
                        </button>
                    </form>
                </div>

                <footer className="footer">
                    <p>&copy; 2026 FS Creation. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
