import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

// Agar tumhare paas currency util nahi hai, toh yeh simple helper use karo
const formatKES = (amount) => {
  return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(amount);
};

const Cart = () => {
  const { fetchUserMeta } = useAuth(); // Navbar badge update karne ke liye
  const navigate = useNavigate();
  
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(null); // Jis item par click hua uska ID store karega

  // 1. 🛒 Fetch Cart Data
  const fetchCart = async () => {
    try {
      const { data } = await API.get("/cart");
      setCart(data.cart || []);
    } catch (error) {
      console.error("Failed to fetch cart", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // 2. 🔄 Update Quantity Logic (+ / -)
  const handleQuantityChange = async (productId, currentQty, type) => {
    const newQty = type === "inc" ? currentQty + 1 : currentQty - 1;

    // Minimum quantity 1 honi chahiye
    if (newQty < 1) return;

    setUpdating(productId); // Spinner dikhao specific button par

    try {
      // Optimistic UI Update: Turant UI badal do taaki fast feel ho
      setCart((prevCart) => 
        prevCart.map((item) => 
          item.product._id === productId ? { ...item, quantity: newQty } : item
        )
      );

      // Backend API Call
      await API.put("/cart/update", { productId, quantity: newQty });
      
      // Navbar Badge Sync
      fetchUserMeta();

    } catch (error) {
      console.error("Quantity update failed", error);
      // Agar fail hua toh wapas server data fetch karo (Undo)
      fetchCart();
    } finally {
      setUpdating(null);
    }
  };

  // 3. ❌ Remove Item
  const removeFromCart = async (productId) => {
    try {
      // Optimistic Remove: UI se turant hata do
      setCart((prevCart) => prevCart.filter((item) => item.product._id !== productId));

      await API.delete(`/cart/remove/${productId}`);
      
      // Navbar update karo
      fetchUserMeta();
    } catch (error) {
      console.error("Remove failed", error);
      fetchCart(); // Revert
    }
  };

  // 4. 🧮 Calculations
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  
  // Example Shipping Logic: Free shipping above 50,000
  const shipping = subtotal > 50000 ? 0 : 500; 
  const total = subtotal + shipping;

  // --- LOADING STATE ---
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          /* --- EMPTY STATE --- */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="bg-blue-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">Looks like you haven't added any printers or inks yet.</p>
            <Link to="/products" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30">
              Start Shopping
            </Link>
          </div>
        ) : (
          /* --- CART GRID --- */
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            
            {/* LEFT: ITEMS LIST (8 Cols) */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <ul className="divide-y divide-gray-100">
                  {cart.map((item) => (
                    <li key={item.product._id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                      
                      {/* Image */}
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50 p-2">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="h-full w-full object-contain mix-blend-multiply"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg font-bold text-gray-900 hover:text-blue-600 transition cursor-pointer" onClick={() => navigate(`/products/${item.product._id}`)}>
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                        <p className="mt-1 text-sm font-medium text-green-600">In Stock</p>
                      </div>

                      {/* Controls */}
                      <div className="flex flex-col items-center sm:items-end gap-4">
                        <span className="text-lg font-bold text-gray-900">
                          {formatKES(item.product.price * item.quantity)}
                        </span>

                        <div className="flex items-center gap-4">
                          {/* Qty Buttons */}
                          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                            <button 
                              onClick={() => handleQuantityChange(item.product._id, item.quantity, "dec")}
                              disabled={item.quantity <= 1 || updating === item.product._id}
                              className="px-3 py-1 bg-gray-50 hover:bg-gray-200 disabled:opacity-50 transition"
                            >-</button>
                            
                            <span className="px-3 py-1 font-semibold min-w-[2rem] text-center bg-white">
                              {updating === item.product._id ? (
                                <span className="animate-spin inline-block h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></span>
                              ) : item.quantity}
                            </span>
                            
                            <button 
                              onClick={() => handleQuantityChange(item.product._id, item.quantity, "inc")}
                              disabled={updating === item.product._id}
                              className="px-3 py-1 bg-gray-50 hover:bg-gray-200 disabled:opacity-50 transition"
                            >+</button>
                          </div>

                          {/* Delete Icon */}
                          <button 
                            onClick={() => removeFromCart(item.product._id)}
                            className="text-gray-400 hover:text-red-500 transition p-2 hover:bg-red-50 rounded-full"
                            title="Remove Item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </div>

                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT: ORDER SUMMARY (4 Cols) */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">{formatKES(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping Estimate</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-bold">Free</span>
                    ) : (
                      <span className="font-medium text-gray-900">{formatKES(shipping)}</span>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-extrabold text-blue-600">{formatKES(total)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate("/checkout")} // Future Route
                  className="w-full mt-8 bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95 flex justify-center items-center gap-2"
                >
                  Checkout 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>

                <div className="mt-6 text-center">
                   <p className="text-xs text-gray-400 flex justify-center items-center gap-1">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                     Secure SSL Encryption
                   </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;