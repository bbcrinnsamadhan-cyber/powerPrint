import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { formatKES } from "../utils/currency";

// 🔥 Skeleton Loader Component
const WishlistSkeleton = () => (
  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm animate-pulse">
    <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-200 rounded"></div>
  </div>
);

const Wishlist = () => {
  const navigate = useNavigate();
  const { fetchUserMeta } = useAuth();

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState(null); // To show spinner on specific card

  // ❤️ Fetch wishlist
  const fetchWishlist = async () => {
    try {
      const { data } = await API.get("/wishlist");
      setWishlist(data.wishlist || []);
    } catch (error) {
      console.error("Failed to fetch wishlist", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  // ❌ REMOVE FROM WISHLIST
  const removeFromWishlist = async (productId) => {
    try {
      // Optimistic Update: UI se turant hata do
      setWishlist((prev) => prev.filter((item) => item._id !== productId));
      
      await API.post(`/wishlist/${productId}`); 
      await fetchUserMeta(); 
    } catch (error) {
      console.error("Remove wishlist failed", error);
      fetchWishlist(); // Revert if failed
    }
  };

  // 🛒 MOVE TO CART
  const moveToCart = async (productId) => {
    setProcessingId(productId); // Button par loading dikhao
    try {
      // 1. Add to Cart
      await API.post("/cart/add", {
        productId,
        quantity: 1,
      });

      // 2. Remove from Wishlist
      await API.post(`/wishlist/${productId}`);

      // 3. Refresh Global States
      await fetchWishlist();
      await fetchUserMeta();

      // 4. Redirect
      navigate("/cart");
    } catch (error) {
      console.error("Move to cart failed", error);
    } finally {
      setProcessingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-8">
           <h1 className="text-3xl font-extrabold text-gray-900">
             My Wishlist
           </h1>
           <span className="bg-blue-100 text-blue-700 text-sm font-bold px-3 py-1 rounded-full">
             {wishlist.length} Items
           </span>
        </div>

        {/* LOADING STATE */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => <WishlistSkeleton key={i} />)}
          </div>
        ) : wishlist.length === 0 ? (
          
          /* EMPTY STATE */
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-16 text-center max-w-2xl mx-auto">
            <div className="bg-red-50 w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Save items you want to buy later here.</p>
            <button
              onClick={() => navigate("/products")}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/30"
            >
              Discover Products
            </button>
          </div>

        ) : (
          
          /* GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product._id}
                className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Remove Button (Top Right) */}
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 shadow-sm transition border border-gray-200"
                  title="Remove from wishlist"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>

                {/* Image Section */}
                <div className="h-48 bg-gray-50 p-6 flex items-center justify-center relative">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <Link to={`/products/${product._id}`}>
                    <h2 className="font-bold text-gray-900 mb-1 line-clamp-1 hover:text-blue-600 transition">
                      {product.name}
                    </h2>
                  </Link>
                  <p className="text-lg font-extrabold text-blue-600 mb-4">
                    {formatKES(product.price)}
                  </p>

                  <button
                    onClick={() => moveToCart(product._id)}
                    disabled={processingId === product._id}
                    className="w-full bg-gray-900 text-white py-2.5 rounded-lg font-medium hover:bg-blue-600 transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {processingId === product._id ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        Moving...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        Move to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;