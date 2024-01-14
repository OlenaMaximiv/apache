import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <HeroSection />
            <FeaturesSection />
            <Footer />
        </div>
    );
};

export default LandingPage;
