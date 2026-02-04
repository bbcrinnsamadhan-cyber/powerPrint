import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  toggleWishlist,
  getWishlist,
} from "../controllers/wishlistController.js";

const router = express.Router();

router.post("/:productId", protect, toggleWishlist);
router.get("/", protect, getWishlist);

export default router;
