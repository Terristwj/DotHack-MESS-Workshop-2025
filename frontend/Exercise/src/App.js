import "./App.css";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/navbar/Navbar";
import Palpedia from "./pages/palpedia/Palpedia";
import About from "./pages/about/About";

// Navbar pages
const pages = ["Palpedia", "About"];

// Main component
function App() {
    // Navbar configurations
    const [currentPage, setCurrentPage] = useState(pages[0]);
    function changePage(page) {
        setCurrentPage(page);
    }
    // - For landing page purposes
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get("default");
        if (page) setCurrentPage(page);
    }, []);

    // Background configurations
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
                    pages={pages}
                    changePage={changePage}
                    backgroundView={backgroundView}
                    showBackground={showBackground}
                />

                {/* Page 1 */}
                {pages[0] === currentPage && (
                    <Palpedia backgroundView={backgroundView} />
                )}

                {/* Page 2 */}
                {pages[1] === currentPage && <About />}
            </div>
        </div>
    );
}

export default App;
