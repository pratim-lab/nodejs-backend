import express from "express";

const router = express.Router();
import { userSignup, userSignin } from "../controllers/user.controller.js";

router.post("/signin", userSignin);
router.post("/signup", userSignup);

export default router;
