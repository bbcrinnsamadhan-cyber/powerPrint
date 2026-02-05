import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/api";
import { formatKES } from "../../utils/currency";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/admin/products");
      setProducts(data.products);
    } catch (error) {
      console.error("Failed to fetch products");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await API.delete(`/admin/products/${id}`);
        fetchProducts(); // Refresh list
      } catch (error) {
        alert("Failed to delete product");
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
        <Link to="/admin/products/add" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          + Add New Product
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50 transition">
                <td className="p-4">
                  <img src={p.images[0]} alt="" className="h-12 w-12 object-contain rounded bg-gray-50 border" />
                </td>
                <td className="p-4 font-medium text-gray-900">{p.name}</td>
                <td className="p-4 text-gray-500">{p.category}</td>
                <td className="p-4 font-bold">{formatKES(p.price)}</td>
                <td className="p-4">{p.stock}</td>
                <td className="p-4 flex gap-3">
                  <Link to={`/admin/products/edit/${p._id}`} className="text-blue-600 hover:underline">Edit</Link>
                  <button onClick={() => handleDelete(p._id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;