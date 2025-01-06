import * as elementModel from "../model/element.model.js";

export const getElement = async (req, res) => {
  let results = await elementModel.getElement();
  return res.status(200).json(results);
};
