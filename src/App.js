import React from 'react';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './styles.css';

function App() {
    return (
        <div>
            <Intro />
            <About />
            <Skills />
            <Experience />
        </div>
    );
}

export default App;