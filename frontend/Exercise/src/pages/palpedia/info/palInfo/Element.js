import "./Element.css";

const elementColor = {
    Neutral: "color-neutral",
    Fire: "color-fire",
    Water: "color-water",
    Grass: "color-grass",
    Electric: "color-electric",
    Ice: "color-ice",
    Ground: "color-ground",
    Dark: "color-dark",
    Dragon: "color-dragon",
};

function Element({ elementURL, element }) {
    return (
        <div className={"pal-element " + elementColor[element]}>
            <img className="img-element" src={elementURL} alt={element} />
            {element}
        </div>
    );
}

export default Element;
