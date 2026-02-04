import User from "../models/User.js";

// ❤️ Add / Remove wishlist (toggle)
export const toggleWishlist = async (req, res) => {
  const user = await User.findById(req.user._id);
  const productId = req.params.productId;

  const exists = user.wishlist.includes(productId);

  if (exists) {
    user.wishlist = user.wishlist.filter(
      (id) => id.toString() !== productId
    );
  } else {
    user.wishlist.push(productId);
  }

  await user.save();

  res.json({ success: true, wishlist: user.wishlist });
};

// 📥 Get wishlist
export const getWishlist = async (req, res) => {
  const user = await User.findById(req.user._id).populate("wishlist");
  res.json({ success: true, wishlist: user.wishlist });
};
