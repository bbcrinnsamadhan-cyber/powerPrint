import User from "../models/User.js";

//  Add to cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  const user = await User.findById(req.user._id);

  const itemIndex = user.cart.findIndex(
    (item) => item.product.toString() === productId
  );

  if (itemIndex > -1) {
    user.cart[itemIndex].quantity += quantity;
  } else {
    user.cart.push({ product: productId, quantity });
  }

  await user.save();

  res.json({ success: true, cart: user.cart });
};

//  Get cart
export const getCart = async (req, res) => {
  const user = await User.findById(req.user._id).populate("cart.product");
  res.json({ success: true, cart: user.cart });
};

//  Remove from cart
export const removeFromCart = async (req, res) => {
  const user = await User.findById(req.user._id);

  user.cart = user.cart.filter(
    (item) => item.product.toString() !== req.params.productId
  );

  await user.save();

  res.json({ success: true, cart: user.cart });
};
export const updateCartQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Validation
    if (!productId || quantity < 1) {
      return res.status(400).json({ success: false, message: "Invalid data" });
    }

    const user = await User.findById(req.user._id);

    // Cart mein item dhundo
    const itemIndex = user.cart.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      // Logic: Add nahi, Set karna hai (=)
      user.cart[itemIndex].quantity = quantity;
      await user.save();
      
      // Updated cart wapas bhejo (with populated product info)
      // Populate zaroori hai taaki frontend par image/name turant update ho sake
      const updatedUser = await User.findById(req.user._id).populate("cart.product");
      res.json({ success: true, cart: updatedUser.cart });
    } else {
      res.status(404).json({ success: false, message: "Item not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};