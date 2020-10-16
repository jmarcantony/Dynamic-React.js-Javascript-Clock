import React, { useState } from "react";
import Footer from "./footer"

function App() {

    let [time, updateTime] = useState("TIME");

    function getTime() {
        setInterval(() => { updateTime((new Date).toLocaleTimeString()) }, 1000);
    };

    return (
        <div>
            <div className="timerBox">
                <div className="subBox">
                    <h1>{time}</h1>
                    <button onClick={getTime}>Get Time</button>
                </div>
            </div >
            <Footer />
        </div>
    )
}

export default App
