import express from "express";
import { googleAuth, getProfile } from "../controllers/authController.js"; // getProfile import karo
import { protect } from "../middleware/authMiddleware.js"; // protect middleware import karo

const router = express.Router();

// Existing routes
router.post("/google", googleAuth);

// ✅ NEW ROUTE: Frontend yahan request karega
// GET /api/auth/profile
router.get("/profile", protect, getProfile);

export default router;