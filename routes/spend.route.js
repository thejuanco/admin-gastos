import { Router } from "express";
import {
  createSpend,
  getAllSpends,
  getSpendById,
  updateSpend,
  deleteSpend,
  deleteAllSpends
} from "../controllers/spendController.js";

const router = Router();

router.post("/createSpend", createSpend);
router.get("/getSpend", getAllSpends);
router.get("/getSpendById/:id", getSpendById);
router.put("/updateSpend/:id", updateSpend);
router.delete("/deleteSpend/:id", deleteSpend);
router.delete("/deleteAllSpends", deleteAllSpends);

export default router;
