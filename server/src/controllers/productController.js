import Product from "../models/Product.js";

/**
 * @desc    Get all active products
 * @route   GET /api/products
 * @access  Public
 */
export const getAllProducts = async (req, res) => {
  try {
    // Sirf active products dikhayenge aur naye pehle aayenge
    const products = await Product.find({ isActive: true }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

/**
 * @desc    Get single product details
 * @route   GET /api/products/:id
 * @access  Public
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
 * @desc    Search products (Optimized for Suggestions & Full Search)
 * @route   GET /api/products/search
 * @query   ?q=keyword&limit=5
 * @access  Public
 */
export const searchProducts = async (req, res) => {
  try {
    // Agar limit query mai hai toh use karo, warna 0 (matlab unlimited)
    const limit = req.query.limit ? parseInt(req.query.limit) : 0;
    
    const keyword = req.query.q
      ? {
          $or: [
            { name: { $regex: req.query.q, $options: "i" } },        // Name match
            { category: { $regex: req.query.q, $options: "i" } },    // Category match
            { subCategory: { $regex: req.query.q, $options: "i" } }, // Subcategory match
          ],
        }
      : {};

    // Database Call
    const products = await Product.find({ ...keyword, isActive: true })
      // Agar suggestions maange hain (limit > 0), toh sirf zaroori data bhejo (Fast)
      .select(limit > 0 ? "name category price images subCategory" : "")
      .limit(limit);

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ success: false, message: "Search failed" });
  }
};

/**
 * @desc    Filter products by Category & Price
 * @route   GET /api/products/filter
 * @query   ?category=Printer&minPrice=0&maxPrice=50000
 * @access  Public
 */
export const filterProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;

    let filter = { isActive: true };

    // Category Filter
    if (category && category !== "All") {
      filter.category = category;
    }

    // Price Filter
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const products = await Product.find(filter).sort({ price: 1 }); // Sort by price low to high

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Filter error:", error);
    res.status(500).json({ success: false, message: "Filter failed" });
  }
};