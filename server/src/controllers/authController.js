import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const googleAuth = async (req, res) => {
  try {
    const { name, email, googleId } = req.body;

    // ❌ Validation
    if (!name || !email || !googleId) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    // 🔍 Check user exists
    let user = await User.findOne({ email });

    // 🆕 Signup
    if (!user) {
      user = await User.create({
        name,
        email,
        googleId,
      });
    }

    // 🔑 Generate JWT
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Google Auth Error:", error);
    res.status(500).json({
      success: false,
      message: "Google authentication failed",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    // req.user humein 'protect' middleware se milega
    const user = req.user;

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // Admin check ke liye zaroori hai
      },
    });
  } catch (error) {
    console.error("Profile Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
