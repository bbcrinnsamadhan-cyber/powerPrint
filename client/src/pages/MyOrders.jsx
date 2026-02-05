import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { formatKES } from "../utils/currency";

const MyOrders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Orders from Backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders/my-orders"); // Ensure backend route matches
        setOrders(data.orders || []);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // 🎨 Helper: Status Color Badge
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-700 border-green-200";
      case "Shipped": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Cancelled": return "bg-red-100 text-red-700 border-red-200";
      default: return "bg-yellow-50 text-yellow-700 border-yellow-200"; // Placed/Processing
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">My Orders</h1>

        {orders.length === 0 ? (
          /* --- EMPTY STATE --- */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-500 mb-8">It looks like you haven't placed any orders yet.</p>
            <button 
              onClick={() => navigate("/products")}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition shadow-lg"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          /* --- ORDER LIST --- */
          <div className="space-y-6">
            {orders.map((order) => (
              <div 
                key={order._id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Order Header */}
                <div className="bg-gray-50/50 p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wide font-bold">Order ID</span>
                    <span className="font-mono text-sm text-gray-800">#{order._id}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wide font-bold">Date Placed</span>
                    <span className="text-sm text-gray-800">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wide font-bold">Total Amount</span>
                    <span className="text-sm font-bold text-gray-900">{formatKES(order.totalAmount)}</span>
                  </div>

                  <div className="md:ml-auto">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-6">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        {/* Image */}
                        <div className="h-20 w-20 flex-shrink-0 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden p-2">
                          <img 
                            src={item.product?.images[0] || "https://via.placeholder.com/150"} 
                            alt={item.product?.name} 
                            className="h-full w-full object-contain mix-blend-multiply"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 line-clamp-1">
                            {item.product?.name || "Product Unavailable"}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            Category: {item.product?.category}
                          </p>
                          <p className="text-sm font-medium text-gray-900 mt-1">
                            {formatKES(item.product?.price)}  <span className="text-gray-400 mx-1">×</span> {item.quantity}
                          </p>
                        </div>
                        
                        {/* Item Total (Hidden on small mobile) */}
                        <div className="hidden sm:block text-right">
                          <p className="font-bold text-gray-900">
                            {formatKES((item.product?.price || 0) * item.quantity)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Footer / Actions */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
                   <button className="text-sm text-blue-600 font-semibold hover:underline">
                     Download Invoice
                   </button>
                   {/* Agar status delivered ho toh review button dikha sakte ho */}
                   {order.status === "Delivered" && (
                     <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                       Write a Review
                     </button>
                   )}
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;