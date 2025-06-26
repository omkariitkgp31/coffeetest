import React from 'react';
import './Intro.css';
import introThumbnail from '../assets/images/intro-thumb.png'; // Replace with your actual image

const IntroTab = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-video-thumbnail">
                    <img src={introThumbnail} alt="Get to know Omkar Singh" />
                    <div className="play-button">&#9658;</div>
                </div>
                <div className="intro-caption">
                    <p>Introduction video (2:13)</p>
                    <a href="https://yourdomain.com/full-video" target="_blank" rel="noopener noreferrer">
                        or, watch the full video here (8:05)
                    </a>
                </div>
            </div>
            <div className="intro-right">
                <h1>Hi, I'm Omkar Singh. I help people build better products through AI & Web.</h1>
                <p>
                    I'm also a big design and automation enthusiast.
                    When I'm not building projects, you’ll find me learning frameworks or watching football. 
                    I enjoy pushing the boundaries of what’s possible with code.
                </p>
                <a className="intro-link" href="#about">
                    Learn more about me <span>&rarr;</span>
                </a>
            </div>
        </div>
    );
};

export default IntroTab;



