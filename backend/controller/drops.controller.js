import * as dropsModel from "../model/drops.model.js";

export const getDrops = async (req, res) => {
    let results = await dropsModel.getDrops();
    return res.status(200).json(results);
};

export const getDropsbyID = async (req, res) => {
    let drop_id = req.params.id;
    let results = await dropsModel.getDropsbyID(drop_id);
    if (results.length == 0) throw "Not Found";
    return res.status(200).json(results);
};

export const createDrop = async (req, res) => {
    let drop_name = req.body.drop_name;
    let results = await dropsModel.createDrop(drop_name);
    return res.status(201).json(results.rowCount);
};

export const updateDrop = async (req, res) => {
    let drop_id = req.params.id;
    let drop_name = req.body.drop_name;
    let results = await dropsModel.updateDrop(drop_id, drop_name);
    return res.status(204).json(results);
};

export const deleteDrop = async (req, res) => {
    let drop_id = req.params.id;
    let results = await dropsModel.deleteDrop(drop_id);
    return res.status(204).json(results);
};
