import React from 'react';
import ServicesComp from '../components/Services';
import Process from '../components/Process';

const Services = () => {
    return (
        <div className="services-page" style={{ paddingTop: 'var(--navbar-height, 80px)', background: 'var(--bg-dark)' }}>
            <ServicesComp />
            <Process />
        </div>
    );
};

export default Services;
