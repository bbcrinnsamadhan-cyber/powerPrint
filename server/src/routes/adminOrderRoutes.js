import express from "express";
import {
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
} from "../controllers/adminOrderController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, adminOnly, getAllOrders);
router.get("/:id", protect, adminOnly, getSingleOrder);
router.put("/:id/status", protect, adminOnly, updateOrderStatus);

export default router;
