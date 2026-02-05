import express from "express"
import { recommendPlaces } from "../modules/places/place.controller.js"
import { validateMoods } from "../utils/validators.js";
import authRoutes from "../modules/auth/auth.routes.js";
import historyRoutes from "../modules/history/history.routes.js";
                                             
const router = express.Router();

router.post("/recommend" , validateMoods ,recommendPlaces);
router.use("/auth" , authRoutes);
router.use("/history", historyRoutes);



export default router ;