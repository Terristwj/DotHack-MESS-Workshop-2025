import { Router } from "express";
import trycatch from "../utils/tryCatch.js";
import * as elementController from "../controller/element.controller.js";

export const router = Router();

router.get("/getElement", trycatch(elementController.getElement));
router.get("/getElement/:id", trycatch(elementController.getElementById));