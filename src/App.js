import React from 'react';
import './App.css';
import Home from "./Components/Home.jsx";
import Aboutme from "./Components/Aboutme.jsx";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Contactme from "./Components/Contactme";

function App() {
    return (
        <>
            <Home/>
            <Aboutme/>
            <Experience/>
            <Education/>
            <Contactme/>
        </>
    );
}

export default App;
