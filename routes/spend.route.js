import { Router } from "express";
import {
  createSpend,
  getAllSpends,
  getSpendById,
  updateSpend,
} from "../controllers/spendController.js";

const router = Router();

router.post("/createSpend", createSpend);
router.get("/getSpend", getAllSpends);
router.get("/getSpendById/:id", getSpendById);
router.post("/updateSpend/:id", updateSpend);

export default router;
