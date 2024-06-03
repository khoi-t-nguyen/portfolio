import React from 'react';
import profilePicture from '../assets/DSCF0651.JPG';
import '../styles.css';

function Intro() {
    return (
        <div className="intro page">
            <h1>Hi, I'm Khoi Nguyen</h1>
            <img className="profile-picture" src={profilePicture} alt="Khoi Nguyen" />
        </div>
    );
}

export default Intro;
