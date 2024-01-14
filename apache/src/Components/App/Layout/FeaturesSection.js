import React from 'react';
import './Layout.css';

const FeaturesSection = () => {
    return (
        <section className="features">
            <div className="feature">
                <h3>Feature 1</h3>
                <p>Describe the first key feature of your website.</p>
            </div>
            <div className="feature">
                <h3>Feature 2</h3>
                <p>Explain the second important feature of your website.</p>
            </div>
            <div className="feature">
                <h3>Feature 3</h3>
                <p>Highlight the third significant feature of your website.</p>
            </div>
        </section>
    );
};

export default FeaturesSection;
