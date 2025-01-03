import "./Info.css";
import Default from "./Default";
import PalInfo from "./palInfo/PalInfo";

function Info({ pal, elements }) {
    // prettier-ignore
    return (
        <div id="pal-info">
            {!pal ? 
                <Default /> : <PalInfo pal={pal} elements={elements}/>}
        </div>
    );
}

export default Info;
