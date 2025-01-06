import * as elementModel from "../model/element.model.js";

export const getElement = async (req, res) => {
  let results = await elementModel.getElement();
  return res.status(200).json(results);
};

export const getElementById = async (req, res) => {
    let id = req.params.id;
    let results = await elementModel.getElementById(id);
    return res.status(200).json(results);
};