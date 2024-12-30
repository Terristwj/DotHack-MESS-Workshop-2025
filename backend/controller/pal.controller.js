import * as palModel from "../model/pal.model.js";

export const getPals = async (req, res) => {
    let results = await palModel.getPals();
    return res.status(200).json(results);
};

export const getPalByID = async (req, res) => {
    let pal_id = req.params.id;
    let results = await palModel.getPalByID(pal_id);
    return res.status(200).json(results);
};

export const createPal = async (req, res) => {
    let data = req.body;
    let results = await palModel.createPal(data);
    return res.status(201).json(results.rowCount);
};

export const updatePal = async (req, res) => {
    let data = req.body;
    let pal_id = req.params.id;
    let results = await palModel.updatePal(pal_id, data);
    return res.status(204).json(results.rowCount);
};

export const deletePal = async (req, res) => {
    let pal_id = req.params.id;
    let results = await palModel.deletePal(pal_id);
    return res.status(204).json(results);
};
