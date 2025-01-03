import "./Navbar.css";

function Navbar({ pages, changePage, backgroundView, showBackground }) {
    return (
        <div className="navbar">
            {pages.map((page) => (
                <NavbarItems
                    key={page}
                    backgroundView={backgroundView}
                    changePage={changePage}
                >
                    {page}
                </NavbarItems>
            ))}

            <NavbarItems
                backgroundView={backgroundView}
                showBackground={showBackground}
            >
                Background
            </NavbarItems>
        </div>
    );
}

function NavbarItems({ backgroundView, showBackground, changePage, children }) {
    function handleClick() {
        // Change page
        if (changePage) changePage(children);

        // Toggle background
        if (showBackground) showBackground();
    }
    return (
        <div
            className="nav-item"
            style={backgroundView ? { cursor: "none" } : {}}
            onClick={handleClick}
        >
            {children}
        </div>
    );
}

export default Navbar;
