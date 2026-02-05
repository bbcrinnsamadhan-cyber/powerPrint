import Order from "../models/Order.js";
import User from "../models/User.js";

// 📦 Place Order (Updated with Shipping Info)
export const placeOrder = async (req, res) => {
  try {
    // Frontend se shipping details nikalo
    const { shippingInfo } = req.body; 

    // Validation: Agar details missing hain toh error do
    if (!shippingInfo || !shippingInfo.address || !shippingInfo.phone || !shippingInfo.city) {
      return res.status(400).json({ 
        success: false, 
        message: "Please provide full shipping address and phone number" 
      });
    }

    const user = await User.findById(req.user._id).populate("cart.product");

    if (!user.cart || user.cart.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    let totalAmount = 0;
    const items = user.cart.map((item) => {
      totalAmount += item.product.price * item.quantity;
      return {
        product: item.product._id,
        quantity: item.quantity,
      };
    });

    // Create Order with Shipping Info
    const order = await Order.create({
      user: user._id,
      items,
      totalAmount,
      shippingInfo, // ✅ Saving Address Here
      paymentMethod: "COD",
      status: "Placed",
    });

    // Clear Cart
    user.cart = [];
    await user.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Order placement failed" });
  }
};
// ... getOrderHistory same rahega


//  User order history
export const getOrderHistory = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate("items.product")
    .sort({ createdAt: -1 });

  res.json({ success: true, orders });
};
