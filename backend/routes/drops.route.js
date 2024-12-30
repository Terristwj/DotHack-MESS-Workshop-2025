import { Router } from "express";
import trycatch from "../utils/tryCatch.js";
import * as dropsController from "../controller/drops.controller.js";

export const router = Router();

router.get("/getDrops", trycatch(dropsController.getDrops));
router.get("/getDrops/:id", trycatch(dropsController.getDropsbyID));

router.post("/createDrop", trycatch(dropsController.createDrop));
router.put("/updateDrop/:id", trycatch(dropsController.updateDrop));

router.delete("/deleteDrop/:id", trycatch(dropsController.deleteDrop));
