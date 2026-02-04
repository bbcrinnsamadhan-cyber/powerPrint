import Product from "../models/Product.js";

/**
 * @desc    Get all products
 * @route   GET /api/products
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * @desc    Get single product
 * @route   GET /api/products/:id
 */
export const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Invalid product ID" });
  }
};

/**
 * @desc    Search products by name
 * @route   GET /api/products/search
 * @query   ?q=printer
 */
export const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.q
      ? {
          $or: [
            { name: { $regex: req.query.q, $options: "i" } },
            { category: { $regex: req.query.q, $options: "i" } },
            { subCategory: { $regex: req.query.q, $options: "i" } },
          ],
        }
      : {};

    const products = await Product.find({ ...keyword, isActive: true });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Search failed" });
  }
};

/**
 * @desc    Filter products
 * @route   GET /api/products/filter
 * @query   ?category=Printer&minPrice=5000&maxPrice=15000
 */
export const filterProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;

    let filter = { isActive: true };

    if (category) {
      filter.category = category;
    }

    if (minPrice && maxPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    const products = await Product.find(filter);

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Filter failed" });
  }
};
