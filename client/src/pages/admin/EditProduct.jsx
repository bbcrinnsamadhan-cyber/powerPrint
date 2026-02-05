import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../services/api";

const EditProduct = () => {
  const { id } = useParams(); // URL se ID nikalo
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subCategory: "",
    price: "",
    stock: "",
    description: "",
    image1: "",
    image2: ""
  });

  // 1. Fetch Existing Data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`); // Public API se data lelo
        const p = data.product;

        // Form Reset with Data
        setFormData({
          name: p.name,
          category: p.category,
          subCategory: p.subCategory || "",
          price: p.price,
          stock: p.stock,
          description: p.description || "",
          image1: p.images[0] || "",
          image2: p.images[1] || ""
        });
      } catch (error) {
        alert("Failed to fetch product details");
        navigate("/admin/products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  // 2. Handle Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Update Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);

    const imagesArray = [formData.image1, formData.image2].filter(url => url && url.trim() !== "");

    const payload = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      images: imagesArray
    };

    try {
      // ✅ Update API Call
      await API.put(`/admin/products/${id}`, payload);
      alert("Product Updated Successfully! ✅");
      navigate("/admin/products");
    } catch (error) {
      console.error("Update failed", error);
      alert("Error updating product");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Product Data...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Edit Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input type="text" name="name" value={formData.name} required onChange={handleChange} className="w-full border p-2 rounded-lg" />
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded-lg">
              <option value="Printer">Printer</option>
              <option value="Scanner">Scanner</option>
              <option value="Ink Bottle">Ink Bottle</option>
              <option value="Toner Cartridge">Toner Cartridge</option>
              <option value="Label Printer">Label Printer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Sub Category</label>
            <input type="text" name="subCategory" value={formData.subCategory} onChange={handleChange} className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price (KES)</label>
            <input type="number" name="price" value={formData.price} required onChange={handleChange} className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stock Quantity</label>
            <input type="number" name="stock" value={formData.stock} required onChange={handleChange} className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL 1 (Main)</label>
          <input type="text" name="image1" value={formData.image1} required onChange={handleChange} className="w-full border p-2 rounded-lg" />
          {formData.image1 && <img src={formData.image1} alt="Preview" className="h-16 w-16 mt-2 object-contain border rounded" />}
        </div>
        <div>
           <label className="block text-sm font-medium text-gray-700 mb-1">Image URL 2 (Optional)</label>
           <input type="text" name="image2" value={formData.image2} onChange={handleChange} className="w-full border p-2 rounded-lg" />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea name="description" value={formData.description} rows="4" onChange={handleChange} className="w-full border p-2 rounded-lg"></textarea>
        </div>

        <button 
          type="submit" 
          disabled={updating}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          {updating ? "Updating..." : "Update Product"}
        </button>

      </form>
    </div>
  );
};

export default EditProduct;