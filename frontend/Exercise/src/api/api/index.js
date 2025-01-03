const endpoint = "http://localhost:5000";

async function apiFetchPal(id) {
    const url = `${endpoint}/pal/getPal/${id}`;
    return fetch(url).then(async (response) => {
        return await response.json().then((data) => {
            return data;
        });
    });
}

export function apiFetchPals() {
    const url = endpoint + "/pal/getPals";
    return fetch(url).then(async (response) => {
        return await response.json().then(async (data) => {
            // Transform data
            let pals = [];

            for (let i = 0; i < data.length; i++) {
                const pal = data[i];
                const palData = await apiFetchPal(pal.pal_id);

                let formattedData = {};

                // Common data
                const temp = palData[0];
                formattedData["id"] = temp.pal_id;
                formattedData["urlImage"] = {
                    thumbnail: temp.pal_menu_img,
                    full: temp.pal_big_img,
                };
                formattedData["name"] = {
                    name: temp.pal_name,
                    nickname: temp.pal_nickname,
                };
                formattedData["elements"] = [temp.element_name];
                formattedData["partnerSkill"] = {
                    name: temp.pal_skill_name,
                    description: temp.pal_skill_desc,
                };
                formattedData["drops"] = [];
                formattedData["description"] = {
                    entry: temp.entry_desc,
                    appearance: temp.appearance_desc,
                    behavior: temp.behaviour_desc,
                };

                // Drops data
                palData.forEach((data) => {
                    formattedData["drops"].push(data.drop_name);
                });

                pals.push(formattedData);
            }

            return { pals: pals };
        });
    });
}

export function apiFetchElements() {
    const url = endpoint + "/element/getElement";
    return fetch(url).then(async (response) => {
        return await response.json().then((data) => {
            // Transform data
            let elements = {};
            data.forEach((element) => {
                elements[element.element_name] = element.element_img;
            });

            return elements;
        });
    });
}

export function apiFetchElementsUnformatted() {
    const url = endpoint + "/element/getElement";
    return fetch(url).then(async (response) => {
        return await response.json();
    });
}

// Day 2 - Add Modal
export function apiAddDrop(data) {
    const url = endpoint + "/drops/createDrop";
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        return await response.json();
    });
}

export function apiGetDrops() {
    const url = endpoint + "/drops/getDrops";
    return fetch(url).then(async (response) => {
        return await response.json();
    });
}

export function apiAddPal(data) {
    const url = endpoint + "/pal/createPal";
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        return await response.json();
    });
}

export function apiAddPalDrops(data) {
    const url = endpoint + "/pal-drop/createPalDrops";
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(async (response) => {
        return await response.json();
    });
}
