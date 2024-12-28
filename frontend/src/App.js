import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Palpedia from "./pages/palpedia/Palpedia";

function App() {
    const [backgroundView, setBackgroundView] = useState(false);

    function showBackground() {
        setBackgroundView(true);
    }
    function hideBackground() {
        if (backgroundView) setBackgroundView(false);
    }

    return (
        <div
            onClick={hideBackground}
            style={backgroundView ? { cursor: "none" } : {}}
        >
            <div
                className={
                    backgroundView ? "background background-view" : "background"
                }
            ></div>
            <div
                className="container"
                style={backgroundView ? { opacity: "0" } : {}}
            >
                <Navbar
                    backgroundView={backgroundView}
                    showBackground={showBackground}
                />
                <Palpedia backgroundView={backgroundView} />
            </div>
        </div>
    );
}

export default App;
