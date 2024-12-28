import "./Navbar.css";

function Navbar({ backgroundView, showBackground }) {
    return (
        <div className="navbar">
            <NavbarItems backgroundView={backgroundView}>Palpedia</NavbarItems>
            <NavbarItems backgroundView={backgroundView}>About</NavbarItems>
            <NavbarItems
                backgroundView={backgroundView}
                showBackground={showBackground}
            >
                Background
            </NavbarItems>
        </div>
    );
}

function NavbarItems({ backgroundView, showBackground, children }) {
    return (
        <div
            className="nav-item"
            style={backgroundView ? { cursor: "none" } : {}}
            onClick={showBackground}
        >
            {children}
        </div>
    );
}

export default Navbar;
