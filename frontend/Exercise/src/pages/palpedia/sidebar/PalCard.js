import "./PalCard.css";

///////////////////////
// *Ex-1: Components //
///////////////////////

function PalCard({ uid, pal, isActive, setActivePal, backgroundView }) {
    function handleClick() {
        if (isActive) {
            setActivePal(null);
        } else {
            setActivePal(pal);
        }
    }

    // TODO: Modify this code snippet - START

    // ? Helper code
    // ? - Uncomment this code snippet to see the data structure
    // console.log(pal);

    return (
        <div
            id={uid}
            className={isActive ? "pal-card-active" : "pal-card"}
            style={backgroundView ? { cursor: "none" } : {}}
            onClick={handleClick}
        >
            {/* (1) Add the ID No. and Name here */}
            {/* (2) Add the Image here */}
        </div>
    );
    // TODO: Modify this code snippet - END

    // ! Solution
    // return (
    //     <div
    //         id={uid}
    //         className={isActive ? "pal-card-active" : "pal-card"}
    //         style={backgroundView ? { cursor: "none" } : {}}
    //         onClick={handleClick}
    //     >
    //         <div className="pal-card-info">
    //             <p>No.{pal.id}</p>
    //             <p>{pal.name.name}</p>
    //         </div>
    //         <img
    //             className="pal-card-image"
    //             src={pal.urlImage.thumbnail}
    //             alt={uid}
    //         />
    //     </div>
    // );
}

export default PalCard;
