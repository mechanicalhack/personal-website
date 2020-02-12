import React from 'react';
import './App.css';
import Home from "./Components/Home.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="aboutme" component={AboutMe}/>
            </Switch>
        </Router>
    );
}

export default App;
