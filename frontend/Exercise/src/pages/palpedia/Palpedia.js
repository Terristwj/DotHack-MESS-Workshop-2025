import "./Palpedia.css";
import { useState, useEffect } from "react";

// Components
import Sidebar from "./sidebar/Sidebar";
import Info from "./info/Info";

// API connections
import { fetchPals, fetchElements } from "../../api";

/////////////////////////////
// *Ex-2: State Management //
/////////////////////////////

function Palpedia({ backgroundView }) {
    // TODO: Observe the variables 'activePal' and 'setActivePal'
    // ? Used at Sidebar Component
    const [activePal, setActivePal] = useState(null);

    //////////////////////////////////////
    // *Ex-3: Handling API Data - START //
    //////////////////////////////////////
    // ? Used at Info Component
    const [palsData, setPalsData] = useState([]);
    const [elementsData, setElementsData] = useState([]);

    // TODO: Observe this useEffect code snippet
    // ? Fetch data from API
    // ? - Note: The 'API' will be locally inside this FE project
    // ? - Day-2 will be about creating your own APIs in the BE project
    useEffect(() => {
        fetchPals().then((data) => {
            setPalsData(data.pals);
        });
        fetchElements().then((data) => {
            setElementsData(data);
        });
    }, []);
    ////////////////////////////////////
    // *Ex-3: Handling API Data - END //
    ////////////////////////////////////

    // TODO: Modify this code snippet - START
    return (
        <div id="content">
            {/* (1) Observe the variables 'activePal' and 'setActivePal' */}
            {/* DO NOT MODIFY - START */}
            <Sidebar
                pals={palsData}
                activePal={activePal}
                setActivePal={setActivePal}
                backgroundView={backgroundView}
            />
            {/* DO NOT MODIFY - END */}

            {/* (2) Something is wrong in this line below */}
            <Info pal={null} elements={elementsData} />
        </div>
    );
    // TODO: Modify this code snippet - END

    // ! Solution
    // return (
    //     <div id="content">
    //         <Sidebar
    //             pals={palsData}
    //             activePal={activePal}
    //             setActivePal={setActivePal}
    //             backgroundView={backgroundView}
    //         />
    //         <Info pal={activePal} elements={elementsData} />
    //     </div>
    // );
}

export default Palpedia;
