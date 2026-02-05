import { useEffect, useState } from "react";
import API from "../../services/api";
import { formatKES } from "../../utils/currency";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
    recentOrders: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await API.get("/admin/products");
        const ordersRes = await API.get("/admin/orders");

        const orders = ordersRes.data.orders || [];
        const products = productsRes.data.products || [];

        const totalSales = orders.reduce((acc, order) => acc + (order.totalAmount || 0), 0);
        
        setStats({
          totalSales,
          totalOrders: orders.length,
          totalProducts: products.length,
          recentOrders: orders.slice(0, 5) 
        });
      } catch (error) {
        console.error("Dashboard data fetch error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-6 md:p-10 text-center">Loading Stats...</div>;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Dashboard Overview</h1>

      {/* STATS CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
        
        {/* Card 1 */}
        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider">Total Revenue</h3>
          <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 mt-2 truncate">
            {formatKES(stats.totalSales)}
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider">Total Orders</h3>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-2">
            {stats.totalOrders}
          </p>
        </div>

        {/* Card 3 (Spans 2 cols on tablet, 1 on desktop) */}
        <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:col-span-2 lg:col-span-1">
          <h3 className="text-gray-500 text-xs sm:text-sm font-medium uppercase tracking-wider">Products In Stock</h3>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-2">
            {stats.totalProducts}
          </p>
        </div>
      </div>

      {/* RECENT ORDERS TABLE */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
        </div>
        
        {/* Responsive Table Container (Scrolls horizontally on mobile) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead className="bg-gray-50 text-gray-500 text-xs sm:text-sm uppercase font-semibold">
              <tr>
                <th className="p-4 whitespace-nowrap">Order ID</th>
                <th className="p-4 whitespace-nowrap">Customer</th>
                <th className="p-4 whitespace-nowrap">Amount</th>
                <th className="p-4 whitespace-nowrap">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {stats.recentOrders.length > 0 ? (
                stats.recentOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-xs sm:text-sm font-mono text-gray-600 whitespace-nowrap">
                      #{order._id.slice(-6).toUpperCase()}
                    </td>
                    <td className="p-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {order.user?.name || "Guest"}
                    </td>
                    <td className="p-4 text-sm font-bold text-gray-700 whitespace-nowrap">
                      {formatKES(order.totalAmount)}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border
                        ${order.status === 'Delivered' ? 'bg-green-50 text-green-700 border-green-200' : 
                          order.status === 'Cancelled' ? 'bg-red-50 text-red-700 border-red-200' : 
                          'bg-yellow-50 text-yellow-700 border-yellow-200'}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-8 text-center text-gray-400">
                    No recent orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;