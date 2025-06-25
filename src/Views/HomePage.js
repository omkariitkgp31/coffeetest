

import React, { useState } from 'react';
import './HomePage.css';

//import Header from './Header.js';

import Topfold from './Topfold.js';



const HomePage = () => {
    const [isBlue, setIsBlue] = useState(false);

    const toggleColor = () => {
        setIsBlue(!isBlue);
    };

    return (
        <div className="cafe-homepage">
            <Topfold />
            
        </div>
    );
};

export default HomePage;


