import "./Info.css";

function Info({ pal }) {
    return (
        <div id="pal-info">
            {!pal ? (
                <>
                    {/* Card to prompt 'select a pal'*/}
                    <div id="info-card">
                        <div id="info-card-wrapper">
                            <h1>Select a Pal</h1>
                        </div>
                    </div>
                </>
            ) : (
                <h1>hey</h1>
            )}
        </div>
    );
}

export default Info;
