

import React, { useState } from 'react';
import './HomePage.css';

//import Header from './Header.js';

import Topfold from './Topfold.js';
import IntroTab from '../components/Intro.js';




const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <Topfold />
            <IntroTab />
        </div>
    );
};

export default HomePage;


