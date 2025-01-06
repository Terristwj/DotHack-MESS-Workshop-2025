import { Router } from "express";
import trycatch from "../utils/tryCatch.js";
import * as palDropController from "../controller/pal_drop.controller.js";

export const router = Router();

router.get("/getPalDrops", trycatch(palDropController.getPalDrops));
router.get("/getPalDropByID/:id", trycatch(palDropController.getPalDropByID));
router.get(
    "/getPalDropByPalID/:id",
    trycatch(palDropController.getPalDropsbyPalID)
);

router.post("/createPalDrops", trycatch(palDropController.createPalDrop));

router.delete("/deletePalDrop/:id", trycatch(palDropController.deletePalDrop));
