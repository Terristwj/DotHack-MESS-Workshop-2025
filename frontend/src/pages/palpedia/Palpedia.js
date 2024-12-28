import "./Palpedia.css";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import Info from "./info/Info";

function Palpedia({ backgroundView }) {
    const [activePal, setActivePal] = useState(null);
    const [palsData, setPalsData] = useState([]);

    function fetchPals() {
        return fetch("pals.json").then(async (response) => {
            return await response.json();
        });
    }
    useEffect(() => {
        document.title = "Palpedia";
        fetchPals().then((data) => {
            setPalsData(data.pals);
        });
    }, []);

    return (
        <div id="content">
            <Sidebar
                pals={palsData}
                activePal={activePal}
                setActivePal={setActivePal}
                backgroundView={backgroundView}
            />
            <Info pal={activePal} />
        </div>
    );
}

export default Palpedia;
