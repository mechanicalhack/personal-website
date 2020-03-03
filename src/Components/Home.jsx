import React from 'react';
import '../Style/Home.css';
import {Link} from "react-scroll";

function Home() {
    return (
        <div>
            <div>
                <h1 className="header-text">
                    <span>Rob</span>
                    <span className="header-last-name-text">Lloyd</span>
                </h1>
            </div>
            <div className="link-container">
                <Link activeClass="active"
                      to="aboutme"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                    About Me
                </Link>
                <Link activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                    Experience
                </Link>
                <Link activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                    Education
                </Link>
                <Link activeClass="active"
                      to="contactme"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>
                    Contact Me
                </Link>
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
