import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCartQuantity, // 👈 Import this
} from "../controllers/cartController.js";

const router = express.Router();

router.post("/add", protect, addToCart);
router.get("/", protect, getCart);
router.delete("/remove/:productId", protect, removeFromCart);

// ✅ NEW ROUTE: PUT request for updating quantity
router.put("/update", protect, updateCartQuantity);

export default router;