import "./Sidebar.css";
import PalCard from "./PalCard";

///////////////////////
// *Ex-1: Components //
///////////////////////

function Sidebar({ pals, activePal, setActivePal, backgroundView }) {
    // Used in the last card
    function redirectToWiki() {
        window.open("https://palworld.fandom.com/wiki/Palpedia", "_blank");
    }

    return (
        <div id="sidebar">
            {/* Scrolling Cards of Pals */}
            <div id="pal-list">
                {pals.map((pal, i) => {
                    pal.uid = `${pal.id}x${pal.name.name}`;
                    const isActive = activePal?.uid === pal.uid;

                    // TODO: Observe this code snippet - START
                    return (
                        <PalCard
                            key={pal.uid}
                            uid={pal.uid}
                            pal={pal}
                            isActive={isActive}
                            setActivePal={setActivePal}
                            backgroundView={backgroundView}
                        />
                    );
                    // TODO: Observe this code snippet - END
                })}
            </div>

            {/* Last Card */}
            <div
                className="last-card"
                style={backgroundView ? { cursor: "none" } : {}}
                onClick={redirectToWiki}
            >
                <div id="count">
                    Total Pals: <br />
                    {pals.length}
                </div>
                <div id="wiki">
                    Visit the Wiki
                    <br />
                    For more Pals
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
