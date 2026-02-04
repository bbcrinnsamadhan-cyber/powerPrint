import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  searchProducts,
  filterProducts,
} from "../controllers/productController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";


const router = express.Router();

// Admin route
router.post("/create", protect, adminOnly, (req, res) => {
  res.send("Product created (admin only)");
});

router.get("/", getAllProducts);
router.get("/search", searchProducts);
router.get("/filter", filterProducts);
router.get("/:id", getSingleProduct);

export default router;
