import React from 'react';
import '../Style/Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
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
        </div>
    );
}

export default Home;
