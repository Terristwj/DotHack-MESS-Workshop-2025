import "./AboutBox.css";

function AboutBox({ title, children }) {
    return (
        <div className="about-box">
            <h1>{title}</h1>
            <div className="about-box-paragraphs">{children}</div>
        </div>
    );
}

export default AboutBox;
