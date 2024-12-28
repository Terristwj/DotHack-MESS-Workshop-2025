import "./PalCard.css";

function PalCard({ uid, pal, isActive, setActivePal, backgroundView }) {
    function handleClick() {
        if (isActive) {
            setActivePal(null);
        } else {
            setActivePal(pal);
        }
    }
    return (
        <div
            id={uid}
            className={isActive ? "pal-card-active" : "pal-card"}
            style={backgroundView ? { cursor: "none" } : {}}
            onClick={handleClick}
        >
            <div className="pal-card-info">
                <p>No.{pal.id}</p>
                <p>{pal.name.name}</p>
            </div>
            <img
                className="pal-card-image"
                src={pal.urlImage.thumbnail}
                alt={uid}
            />
        </div>
    );
}

export default PalCard;
