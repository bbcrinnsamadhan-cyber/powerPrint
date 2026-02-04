import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProductsAdmin,
} from "../controllers/adminProductController.js";

import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, adminOnly, getAllProductsAdmin);
router.post("/create", protect, adminOnly, createProduct);
router.put("/:id", protect, adminOnly, updateProduct);
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;
