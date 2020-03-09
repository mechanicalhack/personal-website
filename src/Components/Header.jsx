import React from 'react';
import '../Style/Header.css';
import {Link} from "react-scroll";

function Header() {
    let offset = -90
    return (
        <div className="header-container">
            <div className="link-container">
                <Link activeClass="active"
                      to="aboutme"
                      spy={true}
                      smooth={true}
                      offset={offset}
                      duration={500}>
                    About Me
                </Link>
                <Link activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={offset}
                      duration={500}>
                    Experience
                </Link>
                <Link activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={offset}
                      duration={500}>
                    Education
                </Link>
                <Link activeClass="active"
                      to="contactme"
                      spy={true}
                      smooth={true}
                      offset={offset}
                      duration={500}>
                    Contact Me
                </Link>
            </div>
        </div>
    );
}

export default Header;
