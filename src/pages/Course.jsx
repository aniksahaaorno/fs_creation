import React from 'react';
import { motion } from 'framer-motion';
import {
    Play,
    BookOpen,
    Clock,
    Calendar,
    Award,
    Users,
    Monitor,
    DollarSign,
    CheckCircle,
    Video,
    Download,
    MessageCircle,
    Briefcase,
    Youtube
} from 'lucide-react';
import './Course.css';
import courseBanner from '../assets/course-banner.jpg';
import instructorImg from '../assets/team/Md. Mijan Shekh - CEO.png';

const Course = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Facebook Pixel Tracking Function
    const trackEvent = (eventName, eventData = {}) => {
        if (window.fbq) {
            window.fbq('track', eventName, eventData);
        }
    };


    const modules = [
        {
            title: "Module 1: Animation & Design Basics",
            lessons: [
                "2D Animation পরিচিতি",
                "Animation Principles (12 Principles)",
                "Frame, Timeline, Keyframe ধারণা",
                "Color Theory & Composition"
            ]
        },
        {
            title: "Module 2: Software Setup & Tools",
            lessons: [
                "Adobe Animate, Illustrator, Photoshop পরিচিতি",
                "Workspace Setup এবং Drawing Tools ব্যবহার",
                "Shape, Pen, Brush Tool",
                "Layer & Symbol System"
            ]
        },
        {
            title: "Module 3: Character Design & Rigging",
            lessons: [
                "Character Design (Face, Body Proportion)",
                "Character Turnaround",
                "Rigging (Hand, Leg, Head)",
                "Expression & Mouth Shape"
            ]
        },
        {
            title: "Module 4: Animation Techniques",
            lessons: [
                "Classic Tween, Shape Tween",
                "Walk Cycle Animation",
                "Run & Jump Animation",
                "Body Movement & Weight",
                "Lip Sync (Dialogue Animation), Emotion Based Animation"
            ]
        },
        {
            title: "Module 5: Background & Scene Design",
            lessons: [
                "Background Design (Adobe Photoshop)",
                "Day & Night Scene",
                "Scene Composition"
            ]
        },
        {
            title: "Module 6: Video Making & Final Project",
            lessons: [
                "স্ক্রীপ্ট রাইটিং (Script Writing)",
                "Storyboard Making",
                "Short Animation Video তৈরি, Timing & Spacing",
                "Camera Movement, Export Settings",
                "Music add and video edit basic"
            ]
        },
        {
            title: "Final Class",
            lessons: [
                "Final Project Review",
                "Freelancing Guideline",
                "Client Handling Tips",
                "Youtube Channel Create",
                "Video Uploaded"
            ]
        }
    ];

    const benefits = [
        { icon: <Award size={24} />, title: "সার্টিফিকেট", desc: "অফিশিয়াল কোর্স কমপ্লিশন সার্টিফিকেট" },
        { icon: <Briefcase size={24} />, title: "লাইভ প্রজেক্ট ও ইন্টার্নশিপ", desc: "রিয়েল ক্লায়েন্ট প্রজেক্ট এবং বেস্ট পারফর্মারদের জন্য পেইড ইন্টার্নশিপ" },
        { icon: <DollarSign size={24} />, title: "ফ্রিল্যান্সিং গাইডলাইন", desc: "Fiverr / Upwork প্রোফাইল সেটআপ এবং ক্লায়েন্ট হান্টিং" },
        { icon: <Video size={24} />, title: "পোর্টফোলিও", desc: "ব্যক্তিগত শো-রিল তৈরি এবং ৩–৫টা প্রফেশনাল কাজ" },
        { icon: <Users size={24} />, title: "লাইফটাইম সাপোর্ট", desc: "প্রাইভেট স্টুডেন্ট কমিউনিটি এবং কাজ পাওয়ার পর সাপোর্ট" },
        { icon: <CheckCircle size={24} />, title: "জব রেফারেন্স", desc: "যোগ্য স্টুডেন্টদের জন্য কাজের রেফারেন্স" },
    ];

    return (
        <div className="course-page">
            {/* Hero Section */}
            <section
                className="course-hero"
                style={{
                    backgroundImage: `linear-gradient(rgba(3, 0, 20, 0.7), rgba(3, 0, 20, 0.8)), url(${courseBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="container">
                    <motion.div
                        className="course-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge">Premium Course</span>
                        <h1>FS Creation – 2D Animation & Creative Video Course</h1>
                        <p className="subtitle">ঘরে বসেই ৩০ দিনের লাইভ ব্যাচে সম্পূর্ণ ২ডি অ্যানিমেশন শিখুন — মোট ৩০টি ইন্টার‌্যাকটিভ ক্লাসে ধাপে ধাপে ফুল গাইডলাইনসহ।</p>

                        <div className="course-meta">
                            <div className="meta-item">
                                <Calendar size={20} />
                                <span>১ এপ্রিল - ৩০শে জুন</span>
                            </div>
                            <div className="meta-item">
                                <Clock size={20} />
                                <span>রাত ১০:০০ - ১১:৩০</span>
                            </div>
                            <div className="meta-item">
                                <Users size={20} />
                                <span>সপ্তাহে ৩ দিন (শনি, সোম, বুধ)</span>
                            </div>
                        </div>

                        <div className="pricing">
                            <span className="original-price">5000/-</span>
                            <span className="current-price">3500/-</span>
                            <span className="discount">(৩০% ছাড়)</span>
                        </div>

                        <div className="cta-group">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSePqZZ-Ddn9Po81tpWr16S5bpzFVQgfEJvvMEAU7KJhG1hrYA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                                onClick={() => trackEvent('Lead', { content_name: 'Enroll Now - Top' })}
                            >
                                Enroll Now
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1Kr1vb2j1vji7gRkEuSxIOtp5JGuVjlvk/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-lg"
                                onClick={() => trackEvent('ViewContent', { content_name: 'Demo Class Video' })}
                            >
                                <Play size={20} /> Watch Demo Class
                            </a>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSctu7bIsDIl2qdDpMUfOJSa1v8WfAelJJ8c1SclRW-FC1mRmg/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-accent btn-lg"
                                onClick={() => trackEvent('Schedule', { content_name: 'Free Session - Top' })}
                            >
                                <MessageCircle size={20} /> Book a Free Session
                            </a>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="section-padding overview-section">
                <div className="container">
                    <div className="grid-2">
                        <motion.div
                            className="overview-text"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2>কোর্স সম্পর্কে বিস্তারিত</h2>
                            <p>
                                ঘরে বসে ৩০ দিনের লাইভ ব্যাচে কমপ্লিট ২ডি অ্যানিমেশন শিখুন। ভর্তি হওয়ার সাথে সাথে পাবেন রিসোর্স ফাইল।
                                এরপর নেওয়া হবে লাইভ ক্লাস। লাইভ ক্লাসের প্রথম ১২ দিনে শেখানো হবে এডোবি এ্যনিমেট সফটওয়্যারের কাজ,
                                ক্যারেক্টর ডিজাইন ও  অ্যানিমেশন রুলস। পরবর্তী ১৩ দিনে একটি কমপ্লিট অ্যানিমেশন করার প্রক্রিয়া দেখানো হবে
                                এবং অ্যাসাইনমেন্টের মাধ্যমে অ্যানিমেশন করিয়ে নেওয়া হবে। বাকি ৫ দিনে আমরা অ্যানিমেশন সেক্টরে কীভাবে আর্নিং করবেন তা শিখব।
                            </p>

                            <h3>কি কি শিখবেন:</h3>
                            <ul className="learning-list">
                                {["ড্রয়িং", "ক্যারেক্টার ডিজাইন", "ব্যাকগ্রাউন্ড ডিজাইন", "স্ক্রিপ্ট রাইটিং", "স্টোরিবোর্ড", "ভিডিও এডিট", "থাম্বনেইল ডিজাইন", "ফ্রিল্যান্সিং", "ইউটিউব এর খুটিনাটি"].map((item, i) => (
                                    <li key={i}><CheckCircle size={16} /> {item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="requirements-box"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3>যা যা লাগবে</h3>
                            <ul>
                                <li><Monitor size={20} /> কম্পিউটার বা ল্যাপটপ</li>
                                <li><CheckCircle size={20} /> র‍্যাম কমপক্ষে ৮ জিবি</li>
                                <li><CheckCircle size={20} /> ব্রডব্যান্ড/WI-FI কানেকশন</li>
                            </ul>
                            <div className="software-list">
                                <p>Software: Adobe Animate, Illustrator, Photoshop</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Batch Details Section */}
            <section className="batch-details-section">
                <div className="container">
                    <motion.div
                        className="batch-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="batch-header">
                            <h2>ভর্তির সময়সীমা ও ক্লাসের সময়সূচী</h2>
                            <p>সরাসরি লাইভ ক্লাসের মাধ্যমে শেখানো হবে</p>
                        </div>
                        <div className="batch-grid">
                            <div className="batch-item">
                                <div className="batch-icon"><Calendar /></div>
                                <div className="batch-text">
                                    <h4>ক্লাস শুরু ও শেষ</h4>
                                    <p>১ এপ্রিল থেকে ৩০শে জুন পর্যন্ত</p>
                                </div>
                            </div>
                            <div className="batch-item">
                                <div className="batch-icon"><Clock /></div>
                                <div className="batch-text">
                                    <h4>ক্লাসের দিন</h4>
                                    <p>শনিবার, সোমবার ও বুধবার</p>
                                </div>
                            </div>
                            <div className="batch-item">
                                <div className="batch-icon"><Video /></div>
                                <div className="batch-text">
                                    <h4>ক্লাসের সময়</h4>
                                    <p>রাত ১০:০০ টা থেকে ১১:৩০ টা</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="section-padding curriculum-section">
                <div className="container">
                    <h2 className="section-title">কোর্স মডিউল</h2>
                    <div className="modules-grid">
                        {modules.map((mod, idx) => (
                            <motion.div
                                key={idx}
                                className="module-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3>{mod.title}</h3>
                                <ul>
                                    {mod.lessons.map((lesson, i) => (
                                        <li key={i}>{lesson}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instructor Section */}
            <section className="section-padding instructor-section">
                <div className="container">
                    <div className="instructor-card">
                        <div className="instructor-img">
                            <img src={instructorImg} alt="Md. Mijan Shekh" />
                        </div>
                        <div className="instructor-info">
                            <span className="role">Course Instructor</span>
                            <h2>Md. Mijan Shekh</h2>
                            <span className="designation">CEO, FS Creation</span>
                            <p>
                                মোঃ মিজাল শেখের রয়েছে দীর্ঘ ৭ বছর অ্যানিমেশন এবং কন্টেন্ট ক্রিয়েশনের এক্সপেরিয়েন্স।
                                তিনি ২০০০+ অ্যানিমেশন প্রজেক্টে কাজ করেছেন। তার অভিজ্ঞতা দিয়ে তিনি এই কোর্সে
                                Animation Fundamentals, Storyboarding, Background Design এবং Client Hunting শেখাবেন।
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course End Offer */}
            <section className="section-padding benefits-section">
                <div className="container">
                    <h2 className="section-title">Course End Offer (FS Creation)</h2>
                    <div className="benefits-grid">
                        {benefits.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="benefit-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="icon-box">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Earning Potential */}
            <section className="section-padding earning-section">
                <div className="container">
                    <h2 className="section-title">কীভাবে ইনকাম করবেন?</h2>
                    <div className="earning-grid">
                        <div className="earning-card">
                            <Briefcase size={40} className="mb-2" />
                            <h3>Freelancing</h3>
                            <p>Fiverr, Upwork, Freelancer এ ২ডি অ্যানিমেশন, এক্সপ্লেইনার ভিডিও প্রজেক্ট।</p>
                            <div className="income-est">
                                <span>$100–$300 / month</span> (Initial)
                            </div>
                        </div>
                        <div className="earning-card">
                            <Youtube size={40} className="mb-2" />
                            <h3>YouTube</h3>
                            <p>নিজের অ্যানিমেশন চ্যানেল, কুইজ ভিডিও, শিশুদের কার্টুন।</p>
                            <div className="income-est">
                                <span>AdSense & Sponsors</span>
                            </div>
                        </div>
                        <div className="earning-card">
                            <Users size={40} className="mb-2" />
                            <h3>Local Clients</h3>
                            <p>স্কুল/কোচিং সেন্টার, ব্যবসা প্রতিষ্ঠানের প্রোমো ভিডিও।</p>
                            <div className="income-est">
                                <span>১০,০০০–৩০,০০০ টাকা</span> / মাস
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp Contact Section */}
            <section className="whatsapp-contact-section">
                <div className="container">
                    <motion.div
                        className="whatsapp-banner"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="whatsapp-content">
                            <div className="whatsapp-icon-bg">
                                <MessageCircle size={32} />
                            </div>
                            <h3>কোনো কিছু বিস্তারিত জানতে চাইলে হোয়াটসঅ্যাপ করুন</h3>
                        </div>
                        <a
                            href="https://wa.me/8801901851585"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-btn"
                        >
                            <span>01901-851585</span>
                            <div className="wa-chip">Connect</div>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="cta-section">
                <div className="container text-center">
                    <h2>ক্যারিয়ার গড়ুন অ্যানিমেশন ইন্ডাস্ট্রিতে</h2>
                    <p>আজই এনরোল করুন এবং শুরু করুন আপনার অ্যানিমেশন জার্নি</p>
                    <div className="cta-group justify-center mt-3">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSePqZZ-Ddn9Po81tpWr16S5bpzFVQgfEJvvMEAU7KJhG1hrYA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                            onClick={() => trackEvent('Lead', { content_name: 'Enroll Now - Bottom' })}
                        >
                            Enroll Now
                        </a>
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSctu7bIsDIl2qdDpMUfOJSa1v8WfAelJJ8c1SclRW-FC1mRmg/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-lg"
                            onClick={() => trackEvent('Schedule', { content_name: 'Free Session - Bottom' })}
                        >
                            <MessageCircle size={20} /> Book a Free Session
                        </a>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/8801901851585"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-wa"
                title="WhatsApp Us"
            >
                <MessageCircle size={30} />
            </a>
        </div>
    );
};

export default Course;
