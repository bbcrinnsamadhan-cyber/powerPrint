import Order from "../models/Order.js";
import User from "../models/User.js";

//  Place Order (COD)
export const placeOrder = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("cart.product");

    if (!user.cart || user.cart.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    //  Total amount calculate
    let totalAmount = 0;

    const items = user.cart.map((item) => {
      totalAmount += item.product.price * item.quantity;

      return {
        product: item.product._id,
        quantity: item.quantity,
      };
    });

    //  Create order
    const order = await Order.create({
      user: user._id,
      items,
      totalAmount,
      paymentMethod: "COD",
      status: "Placed",
    });

    //  Clear cart after order
    user.cart = [];
    await user.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Order placement failed",
    });
  }
};


//  User order history
export const getOrderHistory = async (req, res) => {
  const orders = await Order.find({ user: req.user._id })
    .populate("items.product")
    .sort({ createdAt: -1 });

  res.json({ success: true, orders });
};
