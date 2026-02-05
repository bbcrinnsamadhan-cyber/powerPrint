import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";

const AddProduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    category: "Printer",
    subCategory: "",
    price: "",
    stock: "",
    description: "",
    image1: "", // Simple URL inputs for now
    image2: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Backend expects images as array of strings
    const imagesArray = [formData.image1, formData.image2].filter(url => url.trim() !== "");

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      images: imagesArray
    };

    try {
      await API.post("/admin/products/create", payload);
      alert("Product Created Successfully! 🎉");
      navigate("/admin/products");
    } catch (error) {
      console.error("Failed to create product", error);
      alert("Error creating product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input type="text" name="name" required onChange={handleChange} className="w-full border p-2 rounded-lg" placeholder="e.g. Brother DCP-T420W" />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select name="category" onChange={handleChange} className="w-full border p-2 rounded-lg">
              <option value="Printer">Printer</option>
              <option value="Scanner">Scanner</option>
              <option value="Ink Bottle">Ink Bottle</option>
              <option value="Toner Cartridge">Toner Cartridge</option>
              <option value="Label Printer">Label Printer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub Category</label>
            <input type="text" name="subCategory" onChange={handleChange} className="w-full border p-2 rounded-lg" placeholder="e.g. Ink Tank" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (KES)</label>
            <input type="number" name="price" required onChange={handleChange} className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
            <input type="number" name="stock" required onChange={handleChange} className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        {/* Images (URLs) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL 1 (Main)</label>
          <input type="text" name="image1" required onChange={handleChange} className="w-full border p-2 rounded-lg" placeholder="https://..." />
        </div>
        <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">Image URL 2 (Optional)</label>
           <input type="text" name="image2" onChange={handleChange} className="w-full border p-2 rounded-lg" placeholder="https://..." />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea name="description" rows="4" onChange={handleChange} className="w-full border p-2 rounded-lg"></textarea>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>

      </form>
    </div>
  );
};

export default AddProduct;