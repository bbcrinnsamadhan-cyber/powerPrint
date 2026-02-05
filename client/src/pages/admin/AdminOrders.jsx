import { useEffect, useState } from "react";
import API from "../../services/api";
import { formatKES } from "../../utils/currency";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch All Orders
  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/admin/orders");
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Fetch orders failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 2. Handle Status Update
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await API.put(`/admin/orders/${orderId}/status`, { status: newStatus });
      
      // UI Update instantly (Optimistic update)
      setOrders((prev) => 
        prev.map(order => 
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
      
      // Optional: Toast message show karo
      // alert("Status updated!"); 
    } catch (error) {
      alert("Failed to update status");
    }
  };

  // Status Color Helper
  const getStatusColor = (status) => {
    switch(status) {
      case "Delivered": return "bg-green-100 text-green-700";
      case "Shipped": return "bg-blue-100 text-blue-700";
      case "Cancelled": return "bg-red-100 text-red-700";
      default: return "bg-yellow-100 text-yellow-700"; // Placed/Processing
    }
  };

  if (loading) return <div className="p-10 text-center">Loading Orders...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Manage Orders</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto"> {/* Mobile scroll fix */}
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 text-gray-600 text-sm uppercase">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">User</th>
                <th className="p-4">Items</th>
                <th className="p-4">Total Price</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status (Action)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50 transition">
                  {/* ID */}
                  <td className="p-4 text-xs font-mono text-gray-500">
                    {order._id}
                  </td>
                  
                  {/* User */}
                  <td className="p-4">
                    <div className="font-medium text-gray-900">{order.user?.name || "Guest"}</div>
                    <div className="text-xs text-gray-500">{order.user?.email}</div>
                  </td>

                  {/* Items Summary */}
                  <td className="p-4 text-sm text-gray-600">
                    {order.items.length > 0 ? (
                      <>
                        <span className="font-semibold">{order.items[0].product?.name || "Unknown Product"}</span>
                        {order.items.length > 1 && <span className="text-gray-400"> + {order.items.length - 1} more</span>}
                      </>
                    ) : "No items"}
                  </td>

                  {/* Price */}
                  <td className="p-4 font-bold text-gray-800">
                    {formatKES(order.totalAmount)}
                  </td>

                  {/* Date */}
                  <td className="p-4 text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>

                  {/* Status Dropdown */}
                  <td className="p-4">
                    <select 
                      value={order.status}
                      onChange={(e) => handleStatusChange(order._id, e.target.value)}
                      className={`
                        border-0 cursor-pointer rounded-full px-3 py-1 text-xs font-bold focus:ring-2 focus:ring-blue-500
                        ${getStatusColor(order.status)}
                      `}
                    >
                      <option value="Placed">Placed</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <div className="p-10 text-center text-gray-500">
              No orders found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;