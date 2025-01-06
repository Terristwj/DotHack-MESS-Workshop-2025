import * as palDropModel from "../model/pal_drop.model.js";
import { CustomError } from "../errors/customError.js";

export const getPalDrops = async (req, res) => {
    let results = await palDropModel.getPalDrops();
    return res.status(200).json(results);
};

export const getPalDropByID = async (req, res) => {
    let pal_drop_id = req.params.id;
    let results = await palDropModel.getPalDropByID(pal_drop_id);
    if (results.length == 0)
        throw new CustomError(
            "Not Found",
            404,
            `ID of ${pal_drop_id} not found`
        );
    return res.status(200).json(results);
};

export const getPalDropsbyPalID = async (req, res) => {
    let pal_id = req.params.id;
    let results = await palDropModel.getPalDropsbyPalID(pal_id);
    if (results.length == 0)
        throw new CustomError("Not Found", 404, `ID of ${pal_id} not found`);
    return res.status(200).json(results);
};

export const createPalDrop = async (req, res) => {
    let data = req.body;
    let results = await palDropModel.createPalsDrop(data);
    return res.status(200).json(results);
};

export const deletePalDrop = async (req, res) => {
    let pal_drop_id = req.params.id;
    let results = await palDropModel.deletePalsDrop(pal_drop_id);
    if (results.rowCount == 0) throw new CustomError("Not Found", 404, `ID of ${pal_id} not found`);
    return res.status(204).json(results);
};
