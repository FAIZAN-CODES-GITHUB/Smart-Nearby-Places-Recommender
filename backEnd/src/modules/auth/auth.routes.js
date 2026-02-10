import express from "express"
import { loginController } from "./auth.controller.js"
import { signupController } from "../users/user.controller.js";

const router = express.Router();


router.post("/signup" , signupController);

router.post("/login" , loginController)


export default router