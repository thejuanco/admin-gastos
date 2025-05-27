import { Router } from "express";
import { createSpend, getAllSpends, getSpendById } from "../controllers/spendController.js";

const router = Router();

router.post("/createSpend", createSpend)
router.get("/getSpend", getAllSpends)
router.get("/getSpendById/:id", getSpendById)

export default router