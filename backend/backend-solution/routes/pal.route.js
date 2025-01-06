import { Router } from "express";
import trycatch from "../utils/tryCatch.js";
import * as palController from "../controller/pal.controller.js";

export const router = Router();

router.get("/getPals", trycatch(palController.getPals));
router.get("/getPal/:id", trycatch(palController.getPalByID));

router.post("/createPal", trycatch(palController.createPal));
router.put("/updatePal/:id", trycatch(palController.updatePal));

router.delete("/deletePal/:id", trycatch(palController.deletePal));
