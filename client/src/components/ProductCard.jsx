import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { formatKES } from "../utils/currency";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { fetchUserMeta, user } = useAuth(); // User check ke liye context use kro
  
  // Local loading states for smooth UX
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // Green tick effect ke liye
  const [wishlistLoading, setWishlistLoading] = useState(false);

  // 🛒 ADD TO CART (With Animation)
  const handleAddToCart = async (e) => {
    e.stopPropagation(); // Parent onClick trigger na ho
    
    if (!user) {
      navigate("/login");
      return;
    }

    setIsAdding(true);

    try {
      await API.post("/cart/add", { productId: product._id, quantity: 1 });
      
      // Update Navbar Badge
      await fetchUserMeta(); 

      // Show Success Feedback
      setIsAdding(false);
      setIsAdded(true);
      
      // 2 Seconds baad wapas normal button
      setTimeout(() => setIsAdded(false), 2000);

    } catch (error) {
      console.error("Add to cart failed");
      setIsAdding(false);
    }
  };

  // ❤️ WISHLIST (With Animation)
  const handleWishlist = async (e) => {
    e.stopPropagation();
    
    if (!user) {
      navigate("/login");
      return;
    }

    setWishlistLoading(true);
    try {
      await API.post(`/wishlist/${product._id}`);
      await fetchUserMeta();
    } catch (error) {
      console.error("Wishlist failed");
    } finally {
      setWishlistLoading(false);
    }
  };

  return (
    <div 
      onClick={() => navigate(`/products/${product._id}`)}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      
      {/* IMAGE CONTAINER */}
      <div className="h-56 bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border shadow-sm z-10">
          {product.category}
        </span>

        {/* Wishlist Button (Floating Top Right) */}
        <button
          onClick={handleWishlist}
          disabled={wishlistLoading}
          className="absolute top-3 right-3 p-2 bg-white rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 shadow-sm border border-gray-100 transition z-10"
        >
           {wishlistLoading ? (
             <span className="block w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></span>
           ) : (
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
           )}
        </button>

        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* CARD CONTENT */}
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="font-bold text-gray-900 text-lg mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h2>
        
        {/* Rating Mockup (Optional) */}
        <div className="flex items-center gap-1 mb-3">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <span className="text-xs text-gray-500 font-medium">4.5</span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          {/* Price Block */}
          <div>
            <span className="text-xs text-gray-400 line-through font-medium">
              {formatKES(product.price + 2000)}
            </span>
            <p className="text-xl font-extrabold text-gray-900">
              {formatKES(product.price)}
            </p>
          </div>

          {/* Add Cart Button with Micro-Interaction */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding || isAdded}
            className={`
              flex items-center justify-center p-3 rounded-lg shadow-lg transition-all active:scale-95
              ${isAdded 
                ? "bg-green-500 text-white hover:bg-green-600" 
                : "bg-gray-900 text-white hover:bg-blue-600"
              }
            `}
            title="Add to Cart"
          >
            {isAdding ? (
              // Loading Spinner
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : isAdded ? (
              // Success Checkmark
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            ) : (
              // Default Cart Icon
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;