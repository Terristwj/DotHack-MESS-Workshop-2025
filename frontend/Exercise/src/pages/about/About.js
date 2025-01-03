import "./About.css";
import AboutBox from "./AboutBox";
import HackLogo from "./HackLogo";

function About() {
    return (
        <div id="about">
            <div id="about-wrapper">
                <div id="hackCCA">
                    <AboutBox title="Who Are We?">
                        <p>
                            <span id="hackCCA-text">
                                We are SMU .Hack, a CCA at SMU.
                            </span>
                            <br />
                            SMU .Hack is an interest group dedicated to
                            fostering a passion for technology through workshops
                            and various events.
                            <br />
                            Our mission is to provide a conducive platform for
                            effective knowledge sharing and collaboration.
                        </p>
                    </AboutBox>
                    <HackLogo size="100px" />
                </div>

                <AboutBox title="MESS? What's That?">
                    <p>
                        <span className="keywords">
                            Originally called the MERN Stack Series (MESS)
                        </span>
                        , MESS is a workshop series designed to equip students
                        with the skills to build a full-stack web application
                        using the MERN stack. MERN is a popular web development
                        framework comprising MongoDB, Express, React, and
                        Node.js.
                    </p>
                    <p>
                        <span className="keywords">
                            For this iteration , however, we will focus on
                            React, NodeJS, Express, and PostgreSQL.
                        </span>
                        <br />
                        Hence, the PERN stack — *Not an official acronym!*
                    </p>
                </AboutBox>

                <AboutBox title="About This Website">
                    <p>
                        <span className="keywords">
                            This website is the demo for Day 1 of MESS 2025.
                        </span>
                        <br />
                        On Day 1, we'll cover <b>
                            Frontend Development
                        </b> with <b>React</b>.
                        <br />
                    </p>
                    <p>
                        By the end of the session, you'll gain hands-on
                        experience with both React and frontend development
                        concepts.
                        <br />
                        <span className="keywords">
                            We'll be building this exact website together. So
                            don't worry — step-by-step instructions and code
                            will be provided.
                        </span>
                    </p>
                </AboutBox>

                <AboutBox title="Website Context">
                    <p>
                        Palworld is a video game that has recently gained
                        massive popularity.
                        <br />
                        It's adored by many and often described as "'Pokémon,
                        but with guns!'"
                    </p>
                    <p>
                        This web application, Palpedia, allows users to search
                        for information about specific creatures in the Palworld
                        universe. The application displays details such as the
                        creature's name, image, type, and biography. Palpedia
                        offers a fun and interactive way to explore the world of
                        Palworld.
                    </p>
                </AboutBox>
            </div>
        </div>
    );
}

export default About;
