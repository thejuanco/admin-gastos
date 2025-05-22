import { Router } from "express";
import {
  createBudget,
  getBudget,
  getBudgetById,
  updateBudget,
  deleteBudget,
} from "../controllers/budgetController.js";

const router = Router();

router.post("/createBudget", createBudget);
router.get("/getBudget", getBudget);
router.get("/getBudget/:id", getBudgetById);
router.put("/updateBudget/:id", updateBudget);
router.delete("/deleteBudget/:id", deleteBudget);

export default router;
