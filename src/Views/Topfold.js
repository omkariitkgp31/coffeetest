import React from 'react';
import './Topfold.css';
import { MoonIcon } from '@heroicons/react/24/solid';

import webcafeCup from '../assets/images/image_v1.png';
import webcafeLogo from '../assets/images/logo512.png';

const Topfold = () => {
    return (
        <div className="topfold">
            {/* Navbar */}
            <nav className="navbar">
    <div className="navbar-logo">
        <img src={webcafeLogo} alt="WebCafe Logo" />
        <span>Omkar Singh</span>
    </div>
    <ul className="navbar-links">
        <li>LinkedIn</li>
        <li>Codeforces</li>
        <li>Leetcode</li>
        <li>HackerEarth</li>
        <li>Github</li>
        <li>GFG</li>
        <li>About</li>
    </ul>
    <div className="navbar-actions">
  <button className="icon-button">
    <MoonIcon className="icon-svg" />
  </button>
  <div className="avatar-ring">
    <img src={require('../assets/images/avatar.png')} alt="Avatar" />
  </div>
</div>

</nav>


            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Helping developers build better with coffee and code.</h1>
                    <div className="hero-buttons">
                        <button className="btn-white">Read the blog</button>
                        <button className="btn-dark">Take a course</button>
                    </div>
                    <div className="hero-scroll">
                        <span>&darr;</span> Learn more about us
                    </div>
                </div>
                <div className="hero-image">
                    <img src={webcafeCup} alt="Coffee Fuel" />
                </div>
            </section>
        </div>
    );
};

export default Topfold;
