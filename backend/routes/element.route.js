import { Router } from "express";
import * as elementController from "../controller/element.controller.js"

export const router = Router();

router.get("/getElement", elementController.getElement);