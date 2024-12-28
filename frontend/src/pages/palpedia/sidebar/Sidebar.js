import "./Sidebar.css";
import PalCard from "./PalCard";

function Sidebar({ pals, activePal, setActivePal, backgroundView }) {
    function redirectToWiki() {
        window.open("https://palworld.fandom.com/wiki/Palpedia", "_blank");
    }

    return (
        <div id="sidebar">
            <div id="pal-list">
                {pals.map((pal, i) => {
                    pal.uid = `${pal.id}x${pal.name.name}`;
                    const isActive = activePal?.uid === pal.uid;
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
                })}
            </div>
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
