import { Router } from "express";
import { createSpend } from "../controllers/spendController.js";

const router = Router();

router.post("/createSpend", createSpend)

export default router