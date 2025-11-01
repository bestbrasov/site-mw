import React from 'react';
import Header from './components/Header';
import Schedule from "./components/Schedule.tsx";
import DriveLink from "./components/DriveLink.tsx";
import Team from "./components/Team.tsx";
import Footer from "./components/Footer.tsx";
import CodeOfConduct from "./components/CodeOfConduct.tsx";

const App: React.FC = () => {
    return (
        <div>
            <Header/>
            <div id="schedule">
                <Schedule/>
            </div>
            <div id="drive-link">
                <DriveLink/>
            </div>
            <div id="contact">
                <Team/>
            </div>
            <div id="code-of-conduct">
                <CodeOfConduct/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
