import React from 'react';
import './App.css';
import Header from "./Components/Header.jsx";
import Aboutme from "./Components/Aboutme.jsx";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contactme from "./Components/Contactme";

function App() {
    return (
        <>
            <Header/>
            <div>
                <h1 className="header-text">
                    <span>Rob</span>
                    <span className="header-last-name-text">Lloyd</span>
                </h1>
            </div>
            <div className="welcome-content">
                <h2 className="welcome-text">Welcome</h2>
                <p className="welcome-text">I am a Full Stack Engineer. I have created this website to show some of my
                    skills and help you get to know me a little better.
                </p>
            </div>
            <Aboutme/>
            <Experience/>
            <Education/>
            <Contactme/>
        </>
    );
}

export default App;
