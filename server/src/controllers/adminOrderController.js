import Order from "../models/Order.js";

// 👀 Get all orders (Admin)
export const getAllOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .populate("items.product")
    .sort({ createdAt: -1 });

  res.json({
    success: true,
    count: orders.length,
    orders,
  });
};

// 🔍 Get single order
export const getSingleOrder = async (req, res) => {
  const order = await Order.findById(req.params.id)
    .populate("user", "name email")
    .populate("items.product");

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }

  res.json({ success: true, order });
};

// 🔄 Update order status
export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  const allowedStatus = ["Placed", "Shipped", "Delivered", "Cancelled"];

  if (!allowedStatus.includes(status)) {
    return res.status(400).json({
      success: false,
      message: "Invalid order status",
    });
  }

  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: "Order not found",
    });
  }

  order.status = status;
  await order.save();

  res.json({
    success: true,
    message: "Order status updated",
    order,
  });
};
