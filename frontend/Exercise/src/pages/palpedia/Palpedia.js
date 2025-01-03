import "./Palpedia.css";
import { useState, useEffect } from "react";

// Components
import Sidebar from "./sidebar/Sidebar";
import Info from "./info/Info";

// API connections
import { fetchPals, fetchElements } from "../../api";

function Palpedia({ backgroundView }) {
    // (1) Used at Sidebar Component
    const [activePal, setActivePal] = useState(null);

    // (2) Used at Info Component
    const [palsData, setPalsData] = useState([]);
    const [elementsData, setElementsData] = useState([]);

    // Fetch data from API
    // - Note: The 'API' will be locally inside this FE project
    // - Day-2 will be about creating your own APIs in the BE project
    useEffect(() => {
        fetchPals().then((data) => {
            setPalsData(data.pals);
        });
        fetchElements().then((data) => {
            setElementsData(data);
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
            <Info pal={activePal} elements={elementsData} />
        </div>
    );
}

export default Palpedia;
