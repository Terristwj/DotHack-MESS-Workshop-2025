import "./AddModal.css";
import { useState } from "react";

// API connections
import {
    getUnformattedElements,
    addDrop,
    getDrops,
    addPal,
    addPalDrops,
} from "../../../api";

function AddModal() {
    const [isModalPal, setIsModalPal] = useState(false);
    const [allElements, setAllElements] = useState([]);
    const [allDrops, setAllDrops] = useState([]);

    // HTML Elements
    const modalElement = document.getElementById("modal");
    const modalButtonPal = document.getElementById("modal-button-pal");
    const modalButtonDrop = document.getElementById("modal-button-drop");

    function openModal() {
        modalElement.style.opacity = "1";
        modalElement.style.zIndex = "1";
    }

    function closeModal() {
        modalElement.style.opacity = "0";
        modalElement.style.zIndex = "-1";
        resetForm();
    }

    async function handlePalModal() {
        modalButtonPal.classList.add("modal-button-active");
        modalButtonDrop.classList.remove("modal-button-active");
        setIsModalPal(true);
        resetForm();

        // Get Elements
        const elements = await getUnformattedElements()
            .then((data) => {
                console.log("Successful /element/getElement", data);
                return data;
            })
            .catch((error) => {
                console.log("Fail /element/getElement", error);
                return [];
            });
        setAllElements(elements);

        // Get Drops
        const drops = await getDrops()
            .then((data) => {
                console.log("Successful /drops/getDrops", data);
                return data;
            })
            .catch((error) => {
                console.log("Fail /drops/getDrops", error);
                return [];
            });
        setAllDrops(drops);
    }

    function handleDropModal() {
        modalButtonPal.classList.remove("modal-button-active");
        modalButtonDrop.classList.add("modal-button-active");
        setIsModalPal(false);
        resetForm();
    }

    // Form Handlers
    const [formData, setFormData] = useState({});
    const [checkedDrops, setCheckedDrops] = useState([]);

    /**
     * Clear all input fields
     * @returns {void}
     */
    function resetForm() {
        document.querySelectorAll("input").forEach((input) => {
            input.value = "";
        });
        // Error checkbox
        const checkboxes = document.querySelectorAll(".drop-checkbox");
        checkboxes.forEach((checkbox) => {
            checkbox.style.boxShadow = "none";
        });

        setFormData({});
    }
    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleAddDrop(e) {
        e.preventDefault();

        // Format data
        const payload = {
            drop_name: formData.dropName,
        };

        // API Call
        await addDrop(payload)
            .then((data) => {
                console.log("Successful /drops/getDrops", data);
                alert(`Successfully added ${formData.dropName} as a 'Drop'`);
            })
            .catch((error) => {
                console.log("Fail /drops/getDrops:", error);
                alert("Error adding Drop");
            });

        resetForm();
    }

    async function handleAddPal(e) {
        e.preventDefault();

        // (0) At least one checkbox must be checked
        if (checkedDrops.length === 0) {
            // Error checkbox
            const checkboxes = document.querySelectorAll(".drop-checkbox");
            checkboxes.forEach((checkbox) => {
                checkbox.style.boxShadow = "0px 0px 0px 1px red";
            });

            alert("Please select at least one 'Drop'");
            return;
        }

        // (1) Add Pal
        // - Format data
        let payload = {
            pal_name: formData.palName,
            pal_nickname: formData.palNickname,
            element_id: formData.elementID || 1, // Default to 1
            entry_desc: formData.bioDescription,
            appearance_desc: formData.bioAppearance,
            behaviour_desc: formData.bioBehavior,
            pal_skill_name: formData.partnerSkill,
            pal_skill_desc: formData.partnerSkillDesc,
            pal_menu_img: formData.imgThumbnail,
            pal_big_img: formData.imgFull,
        };
        // - API Call
        const palID = await addPal(payload)
            .then((data) => {
                console.log("Successful: /pal/createPal", data);
                return data.pal_id;
            })
            .catch((error) => {
                console.log("Fail: /pal/createPal", error);
                return -1;
            });

        // - Error handling
        if (palID === -1) {
            alert("Error adding Pal");
            return;
        }

        // (2) Link Drops
        // - Format data
        payload = {
            rows: [],
        };
        checkedDrops.forEach(async (dropID) => {
            payload.rows.push({
                drop_id: dropID,
                pal_id: palID,
            });
        });

        // - API Call
        await addPalDrops(payload)
            .then((data) => {
                console.log("Successful: /pal/createPalDrops", data);
            })
            .catch((error) => {
                console.log("Fail: /pal/createPalDrops", error);
            });

        // Reset form
        resetForm();

        alert(`Successfully added ${formData.palName} as a 'Pal'`);
    }

    return (
        <>
            <div
                id="add-pal"
                className="adding-card"
                onClick={() => openModal()}
            >
                Add More Data
            </div>

            {/* Modal */}
            <div id="modal" className="modal">
                <div className="modal-content">
                    {/* Header */}
                    <div className="modal-header">
                        {/* Add Drop or Pal option */}
                        <div>
                            <span>Select an Option</span>
                            <br />
                            <div className="modal-button-container">
                                <button
                                    id="modal-button-drop"
                                    className="modal-button modal-button-active"
                                    onClick={handleDropModal}
                                >
                                    Add 'Drop'
                                </button>

                                <button
                                    id="modal-button-pal"
                                    className="modal-button"
                                    onClick={handlePalModal}
                                >
                                    Add 'Pal'
                                </button>
                            </div>
                        </div>

                        {/* Close */}
                        <span className="close" onClick={() => closeModal()}>
                            &times;
                        </span>
                    </div>

                    {/* Info */}
                    <div className="modal-info">
                        {isModalPal ? (
                            <>
                                <h1>Add Pal</h1>
                                <form onSubmit={handleAddPal}>
                                    <TextField
                                        label="Name"
                                        name="palName"
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        label="Nickname"
                                        name="palNickname"
                                        onChange={handleFormChange}
                                    />

                                    {/* Dropdown Element */}
                                    <ElementDropdown
                                        elements={allElements}
                                        onChange={handleFormChange}
                                    />

                                    <TextField
                                        label="Partner Skill"
                                        name="partnerSkill"
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        label="Partner Skill Desc"
                                        name="partnerSkillDesc"
                                        onChange={handleFormChange}
                                    />
                                    <hr />
                                    <h3>Biography</h3>
                                    <TextField
                                        label="Description"
                                        name="bioDescription"
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        label="Appearance"
                                        name="bioAppearance"
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        label="Behavior"
                                        name="bioBehavior"
                                        onChange={handleFormChange}
                                    />
                                    <hr />
                                    <h3>Images</h3>
                                    <TextField
                                        label="Thumbnail Image"
                                        name="imgThumbnail"
                                        onChange={handleFormChange}
                                    />
                                    <TextField
                                        label="Full Image"
                                        name="imgFull"
                                        onChange={handleFormChange}
                                    />
                                    <hr />
                                    <h3>Drops Linked</h3>
                                    <div className="all-drops-container">
                                        {allDrops.map((drop, i) => (
                                            <CheckedDrops
                                                key={i}
                                                drop={drop}
                                                checkedDrops={checkedDrops}
                                                setCheckedDrops={
                                                    setCheckedDrops
                                                }
                                            />
                                        ))}
                                    </div>

                                    <button type="submit">
                                        Confirm Add 'Pal'
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <h1>Add Drop</h1>
                                <form onSubmit={handleAddDrop}>
                                    <TextField
                                        label="Drop Name"
                                        name="dropName"
                                        onChange={handleFormChange}
                                    />

                                    <button type="submit">
                                        Confirm Add 'Drop'
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

function TextField({ label, name, onChange }) {
    return (
        <label>
            <span>{label}:</span>
            <input name={name} type="text" onChange={onChange} required />
        </label>
    );
}

function ElementDropdown({ elements, onChange }) {
    return (
        <label>
            <span>Element:</span>
            <select name="elementID" onChange={onChange} required>
                {elements.map((element, i) => (
                    <option key={i} value={element.element_id}>
                        {element.element_name}
                    </option>
                ))}
            </select>
        </label>
    );
}

function CheckedDrops({ drop, checkedDrops, setCheckedDrops }) {
    function handleCheck(e) {
        if (e.target.checked) {
            setCheckedDrops([...checkedDrops, drop.drop_id]);
        } else {
            setCheckedDrops(checkedDrops.filter((id) => id !== drop.drop_id));
        }
    }
    return (
        <label>
            <input
                type="checkbox"
                className="drop-checkbox"
                name={drop.drop_name}
                onChange={handleCheck}
            />{" "}
            {drop.drop_name}
        </label>
    );
}

export default AddModal;
