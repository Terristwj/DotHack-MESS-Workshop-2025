import "./DescriptionBox.css";

function DescriptionBox({ children }) {
    return (
        <div className="description-box-outer">
            <div className="description-box-inner">{children}</div>
        </div>
    );
}

export default DescriptionBox;
