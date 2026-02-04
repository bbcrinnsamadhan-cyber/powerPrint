import { createContext, useContext, useEffect, useState } from "react";
import API from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Ab isme { name: "Amit", email: "..." } store hoga
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // --- DATA FETCHING LOGIC ---
  const fetchUserMeta = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setUser(null);
      setCartCount(0);
      setWishlistCount(0);
      setLoading(false);
      return;
    }

    try {
      // Promise.all use kiya taaki teeno API calls parallel mein chalein (Faster Loading)
      const [profileRes, cartRes, wishlistRes] = await Promise.all([
        API.get("/auth/profile"), // ⚠️ Ensure backend has this endpoint
        API.get("/cart"),
        API.get("/wishlist"),
      ]);

      // 1. Set User Profile
      setUser(profileRes.data.user);

      // 2. Set Cart Count (Quantity aware)
      const cartItems = cartRes.data.cart || [];
      const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalQty);

      // 3. Set Wishlist Count
      const wishlistItems = wishlistRes.data.wishlist || [];
      setWishlistCount(wishlistItems.length);

    } catch (error) {
      console.error("Auth sync failed:", error);
      // Agar token invalid hai toh logout kar do
      if (error.response && error.response.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserMeta();
  }, []);

  // --- ACTIONS ---

  // Login Function: Login page se call hoga
  const login = (token) => {
    localStorage.setItem("token", token);
    setLoading(true); // Loading state on karo taaki flicker na ho
    fetchUserMeta();  // Data fetch karo
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setCartCount(0);
    setWishlistCount(0);
    // Optional: Redirect logic yahan nahi, component mein hona chahiye
  };

  // Optimistic Update Helper (For snappy UI)
  // Jab user "Add to Cart" click kare, toh turant count badha do bina API wait kiye
  const updateCartCountLocal = (count) => {
    setCartCount(count);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        cartCount,
        wishlistCount,
        loading,
        login,    // Exposed login function
        logout,   // Exposed logout function
        fetchUserMeta, // Manual refresh ke liye
        updateCartCountLocal // Optimistic updates ke liye
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);