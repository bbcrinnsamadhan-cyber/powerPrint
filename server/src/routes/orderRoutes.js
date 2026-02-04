import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  placeOrder,
  getOrderHistory,
} from "../controllers/orderController.js";

const router = express.Router();

// 📦 Place order (COD)
router.post("/place", protect, placeOrder);

// 📜 Order history
router.get("/my-orders", protect, getOrderHistory);

export default router;
