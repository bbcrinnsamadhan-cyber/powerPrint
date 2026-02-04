import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },

    images: [
      {
        type: String, // IMAGE URL ONLY
        required: true,
      },
    ],

    stock: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
