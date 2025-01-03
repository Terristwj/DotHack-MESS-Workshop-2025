// Feature Flag: Backend APIs
import { isBackendAPI } from "../constants";

// Backend API
import {
    apiFetchPals,
    apiFetchElements,
    apiFetchElementsUnformatted,
    apiAddDrop,
    apiGetDrops,
    apiAddPal,
    apiAddPalDrops,
} from "./api";

// Mock API
import { mockFetchPals, mockFetchElements } from "./mock";

// API Endpoints
export const fetchPals = isBackendAPI ? apiFetchPals : mockFetchPals;
export const fetchElements = isBackendAPI
    ? apiFetchElements
    : mockFetchElements;

// For Day 2 - Modal adding Pals & Drops
export const getUnformattedElements = isBackendAPI
    ? apiFetchElementsUnformatted
    : null;

export const addDrop = isBackendAPI ? apiAddDrop : null;
export const getDrops = isBackendAPI ? apiGetDrops : null;

export const addPal = isBackendAPI ? apiAddPal : null;
export const addPalDrops = isBackendAPI ? apiAddPalDrops : null;
