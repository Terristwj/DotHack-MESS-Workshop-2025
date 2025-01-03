import "./PalInfo.css";
import Element from "./Element";
import DescriptionBox from "./DescriptionBox";

//////////////////////////
// *Ex-4: Passing Props //
//////////////////////////

function PalInfo({ pal, elements }) {
    // ? Helper function
    // ? - For the 'Drops' section
    function getDropText(drops) {
        return drops.reduce((accum, item) => {
            return `${accum}, ${item}`;
        });
    }

    // TODO: Modify this code snippet - START
    return (
        <div id="pal-info">
            {/* Section 1: Elements */}
            <div id="pal-info-header">
                {pal.elements.map((element) => {
                    const key = `${pal.uid}x${element}`;
                    return (
                        <Element
                            key={key}
                            elementURL={elements[element]}
                            element={element}
                        />
                    );
                })}
            </div>

            {/* Information - START =================================*/}
            <div id="pal-info-body">
                {/* Section 2: Image & Entry */}
                <div className="pal-info-aside-left">
                    <img
                        id="pal-image-full"
                        src={pal.urlImage.full}
                        alt={pal.name}
                    />
                    <DescriptionBox id="entry">
                        <p>{pal.description.entry}</p>
                    </DescriptionBox>
                </div>

                {/* Section 2: Biography & Drops */}
                <div className="pal-info-aside-right">
                    {/* Add your code here - START */}

                    {/* Refer to the above, to make use of <DescriptionBox/> */}

                    {/* Add your code here - END */}
                </div>
            </div>
            {/* Information - END ===================================*/}
        </div>
    );
    // TODO: Modify this code snippet - START

    // ! Solution
    // return (
    //     <div id="pal-info">
    //         {/* Section 1: Elements */}
    //         <div id="pal-info-header">
    //             {pal.elements.map((element) => {
    //                 const key = `${pal.uid}x${element}`;
    //                 return (
    //                     <Element
    //                         key={key}
    //                         elementURL={elements[element]}
    //                         element={element}
    //                     />
    //                 );
    //             })}
    //         </div>

    //         {/* Information - START =================================*/}
    //         <div id="pal-info-body">
    //             {/* Section 2: Image & Entry */}
    //             <div className="pal-info-aside-left">
    //                 <img
    //                     id="pal-image-full"
    //                     src={pal.urlImage.full}
    //                     alt={pal.name}
    //                 />
    //                 <DescriptionBox id="entry">
    //                     <p>{pal.description.entry}</p>
    //                 </DescriptionBox>
    //             </div>

    //             {/* Section 2: Biography & Drops */}
    //             <div className="pal-info-aside-right">
    //                 <DescriptionBox id="appearance">
    //                     <h2>Appearance</h2>
    //                     <p>{pal.description.appearance}</p>
    //                 </DescriptionBox>

    //                 <DescriptionBox id="behavior">
    //                     <h2>Behavior</h2>
    //                     <p>{pal.description.behavior}</p>
    //                 </DescriptionBox>

    //                 <DescriptionBox id="partner-skill">
    //                     <h2>Partner Skill: {pal.partnerSkill.name}</h2>
    //                     <p>{pal.partnerSkill.description}</p>
    //                 </DescriptionBox>

    //                 <DescriptionBox id="drops">
    //                     <h2>Drops</h2>
    //                     <p>{getDropText(pal.drops)}</p>
    //                 </DescriptionBox>
    //             </div>
    //         </div>
    //         {/* Information - END ===================================*/}
    //     </div>
    // );
}

export default PalInfo;
