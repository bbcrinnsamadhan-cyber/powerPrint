import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { formatKES } from "../utils/currency";

const Checkout = () => {
  const navigate = useNavigate();
  const { fetchUserMeta, user } = useAuth();
  
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Kenya"
  });

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const { data } = await API.get("/cart");
        setCart(data.cart || []);
      } catch (error) {
        console.error("Cart fetch failed");
      }
    };
    fetchCart();
  }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        shippingInfo: {
            address: formData.address,
            city: formData.city,
            postalCode: formData.postalCode,
            country: formData.country,
            phone: formData.phone,
            email: formData.email
        }
      };

      await API.post("/orders/place", payload);
      await fetchUserMeta();
      navigate("/orders");
      // alert("Order Placed Successfully! 🎉"); (Optional)

    } catch (error) {
      console.error("Order failed", error);
      alert(error.response?.data?.message || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return <div className="p-10 text-center text-gray-500">Your cart is empty.</div>;

  return (
    // 📱 Container Padding Adjusted for Mobile (py-6 px-4) vs Desktop (py-12 px-8)
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* --- LEFT: SHIPPING FORM (Mobile: Order 1, Desktop: Col 7) --- */}
        <div className="lg:col-span-7 order-1">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="bg-blue-100 p-2 rounded-full text-base">📍</span> Shipping Details
            </h2>
            
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-5">
              
              {/* Responsive Grid: Mobile 1 Col, Tablet+ 2 Cols */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-500 text-sm">🇰🇪 +254</span>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="712 345 678"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Street Address</label>
                <input 
                  type="text" 
                  name="address"
                  placeholder="Apartment, Studio, or Floor"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                />
              </div>

              {/* City & Postal Code Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">City</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Postal Code</label>
                  <input 
                    type="text" 
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition" 
                  />
                </div>
              </div>

              {/* Country (Read Only / Select) */}
               <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Country</label>
                  <select disabled className="w-full bg-gray-100 text-gray-500 border border-gray-300 rounded-lg px-4 py-3 cursor-not-allowed">
                    <option>Kenya</option>
                  </select>
                </div>

            </form>
          </div>
        </div>

        {/* --- RIGHT: ORDER SUMMARY (Mobile: Order 2, Desktop: Col 5) --- */}
        <div className="lg:col-span-5 order-2">
          {/* 📱 Sticky only on large screens (lg:sticky), static on mobile */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 lg:sticky lg:top-28">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

            {/* Items List */}
            <div className="space-y-4 max-h-60 overflow-y-auto mb-6 pr-2 custom-scrollbar">
              {cart.map((item) => (
                <div key={item.product._id} className="flex gap-4 items-center group">
                  <div className="h-16 w-16 flex-shrink-0 bg-gray-50 rounded-lg border border-gray-100 p-1">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="h-full w-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">{formatKES(item.product.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            {/* Breakdown */}
            <div className="border-t border-dashed border-gray-200 pt-4 space-y-3 text-gray-600">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">{formatKES(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className="text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded text-xs">Free</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 my-4 pt-4 flex justify-between items-center">
              <span className="text-gray-900 font-bold text-lg">Total</span>
              <span className="text-2xl font-extrabold text-blue-600">{formatKES(total)}</span>
            </div>

            {/* Payment Info */}
            <div className="bg-blue-50/50 text-blue-800 px-4 py-3 rounded-xl text-sm font-medium mb-6 flex items-start gap-3 border border-blue-100">
              <span className="text-lg">💵</span> 
              <div>
                <p className="font-bold text-blue-900">Cash on Delivery</p>
                <p className="text-xs text-blue-700/80 mt-0.5">Pay securely when you receive your order.</p>
              </div>
            </div>

            {/* Place Order Button */}
            <button 
              type="submit" 
              form="checkout-form"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {loading ? (
                 <>
                   <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                   Processing...
                 </>
              ) : (
                `Place Order • ${formatKES(total)}`
              )}
            </button>

            <p className="text-[10px] text-gray-400 text-center mt-4 leading-tight">
              By placing this order, you agree to PrintShop's <span className="underline cursor-pointer">Terms of Service</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;