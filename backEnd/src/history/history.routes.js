import express from "express";
import { getHistory } from "./history.controller.js";
import { requireAuth } from "../../middlewares/requireAuth.js";

const router = express.Router();

router.get("/", requireAuth, getHistory);

export default router;
