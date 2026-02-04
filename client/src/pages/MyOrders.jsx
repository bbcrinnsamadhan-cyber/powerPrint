import { useEffect, useState } from "react";
import API from "../services/api";
import { formatKES } from "../utils/currency";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // 📦 Fetch orders
  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders/my-orders");
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

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-500">
        Loading your orders...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-extrabold mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <p className="text-gray-500">
              You have not placed any orders yet
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white p-6 rounded-xl shadow"
              >
                {/* HEADER */}
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Order ID
                    </p>
                    <p className="font-mono text-sm">
                      {order._id}
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-600">
                    {order.status}
                  </span>
                </div>

                {/* ITEMS */}
                <div className="divide-y">
                  {order.items.map((item) => (
                    <div
                      key={item.product._id}
                      className="flex justify-between py-3"
                    >
                      <div>
                        <p className="font-medium">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-semibold">
                        {formatKES(
                          item.product.price * item.quantity
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                {/* FOOTER */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-500">
                    Payment: {order.paymentMethod}
                  </p>

                  <p className="text-lg font-extrabold text-blue-600">
                    Total: {formatKES(order.totalAmount)}
                  </p>
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
