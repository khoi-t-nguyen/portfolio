import React from 'react';
import profilePicture from '../assets/DSCF0651.JPG'; // Import the image
import '../styles.css'; // Ensure your CSS is imported

function Intro() {
    return (
        <div className="intro page">
            <h1>Hi, I'm Khoi Nguyen</h1>
            <img className="profile-picture" src={profilePicture} alt="Khoi Nguyen" />
        </div>
    );
}

export default Intro;
