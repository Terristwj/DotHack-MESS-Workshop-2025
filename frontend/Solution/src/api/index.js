const folder = "data/";

export function fetchPals() {
    const url = folder + "pals.json";
    return fetch(url).then(async (response) => {
        return await response.json();
    });
}

export function fetchElements() {
    const url = folder + "elements.json";
    return fetch(url).then(async (response) => {
        return await response.json();
    });
}
