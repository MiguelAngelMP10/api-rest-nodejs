import express from "express";
import AuthController from "../app/Http/Controllers/AuthController.js";
const router = express.Router();

router.post("/auth", (req, res) => AuthController.auth(req, res));

export default router;