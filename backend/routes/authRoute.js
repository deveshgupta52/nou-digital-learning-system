import express from "express";
import { loginUser } from "../controllers/loginController.js";

const router = express.Router();

// ✅ Student/Admin login
router.post("/login", loginUser);

export default router;
