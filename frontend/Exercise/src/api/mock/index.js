const folder = "data/";

export function mockFetchPals() {
    const url = folder + "pals.json";
    return fetch(url).then(async (response) => {
        return await response.json();
    });
}

export function mockFetchElements() {
    const url = folder + "elements.json";
    return fetch(url).then(async (response) => {
        return await response.json();
    });
}
