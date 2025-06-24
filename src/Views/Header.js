import React from 'react';
import './Header.css';
import webcafeCup from '../assets/images/image_v1.png';
import webcafeLogo from '../assets/images/logo512.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-top">
                <img src={webcafeLogo} alt="WebCafe Logo" className="logo" />
                <span className="brand-slogan">automate everything.</span>
            </div>
            <div className="header-content">
                <div className="text-section">
                    <h1>Helping people make the world a better place through quality software.</h1>
                    <div className="button-group">
                        <button className="primary-btn">Read the blog</button>
                        <button className="secondary-btn">Take a course</button>
                    </div>
                </div>
                <div className="image-section">
                    <img src={webcafeCup} alt="Koala Illustration" />
                </div>
            </div>
        </div>
    );
};

export default Header;
