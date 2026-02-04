import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { formatKES } from "../utils/currency";
import { useAuth } from "../context/AuthContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { fetchUserMeta } = useAuth();

  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [placing, setPlacing] = useState(false);

  // 📦 Fetch cart
  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");
      setCart(data.cart || []);
    } catch (err) {
      console.error("Fetch cart failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 🧮 Total
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  // 🧾 PLACE ORDER (COD)
const placeOrder = async () => {
    if (cart.length === 0) return;
  
    try {
      setPlacing(true);
  
      await API.post("/orders/place", {
        paymentMethod: "COD",
      });
  
      await fetchUserMeta(); // cart count reset
      alert("Order placed successfully ✅");
  
      navigate("/orders");
    } catch (err) {
      console.error("Order failed", err);
      alert("Order failed, try again");
    } finally {
      setPlacing(false);
    }
  };
  

  if (loading) {
    return <p className="text-center mt-20">Loading checkout...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-extrabold mb-6">
          Checkout
        </h1>

        {/* CART SUMMARY */}
        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div
              key={item.product._id}
              className="flex justify-between border-b pb-3"
            >
              <div>
                <p className="font-medium">
                  {item.product.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × {formatKES(item.product.price)}
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

        {/* TOTAL */}
        <div className="flex justify-between text-lg font-bold border-t pt-4 mb-6">
          <span>Total</span>
          <span className="text-blue-600">
            {formatKES(totalAmount)}
          </span>
        </div>

        {/* PAYMENT */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2">
            Payment Method
          </h2>
          <div className="border p-4 rounded-lg bg-gray-50">
            <label className="flex items-center gap-3">
              <input type="radio" checked readOnly />
              Cash on Delivery (COD)
            </label>
          </div>
        </div>

        {/* PLACE ORDER */}
        <button
          onClick={placeOrder}
          disabled={placing}
          className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-60"
        >
          {placing ? "Placing Order..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
