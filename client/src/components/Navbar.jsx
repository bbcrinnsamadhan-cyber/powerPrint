import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, cartCount, wishlistCount, loading, logout } = useAuth();
  
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm.trim()}`);
    }
  };

  // 🔥 Loading Skeleton bhi bada kiya (h-24)
  if (loading) return <div className="h-24 bg-white border-b"></div>; 

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm">
      
      {/* 🔥 Increased Container Height to h-24 (96px) */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center gap-6">
        
        {/* --- LOGO SECTION (BIGGER) --- */}
        <div 
          onClick={() => navigate("/")} 
          className="flex items-center gap-4 cursor-pointer flex-shrink-0"
        >
          {/* ✅ Logo Size Increased (h-16) */}
          <img 
            src={logo} 
            alt="PowerPrint Logo" 
            className="h-16 w-auto object-contain" 
          />
          
          {/* ✅ Text Size Increased (text-3xl) */}
          
        </div>

        {/* --- 🔍 SEARCH BAR (Taller & Wider) --- */}
        <div className="hidden md:flex flex-1 max-w-2xl px-6">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              // ✅ Padding increased (py-3) & Font bigger (text-base)
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base transition-all duration-300 shadow-inner"
              placeholder="Search printers, ink, toners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        {/* --- RIGHT SIDE ACTIONS (Scaled Up Icons) --- */}
        <div className="flex items-center gap-5 flex-shrink-0">
          
          {user ? (
            <>
              {/* Product Link */}
              <Link 
                to="/products" 
                className="hidden lg:block text-base font-semibold text-gray-600 hover:text-blue-600 transition-colors"
              >
                Products
              </Link>

              {/* Wishlist Icon (Bigger h-7) */}
              <button 
                onClick={() => navigate("/wishlist")} 
                className="relative group text-gray-600 hover:text-red-500 transition-colors p-2"
                title="Wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                   <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
                )}
              </button>

              {/* Cart Icon (Bigger h-7) */}
              <button 
                onClick={() => navigate("/cart")} 
                className="relative group text-gray-600 hover:text-blue-600 transition-colors p-2"
                title="Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
              
              <div className="h-8 w-px bg-gray-300 mx-2 hidden sm:block"></div>

              {/* Profile / Logout Section */}
              <div className="flex items-center gap-3 pl-1">
                {/* Avatar (Bigger h-10) */}
                <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md cursor-pointer hover:shadow-lg transition ring-2 ring-white">
                    {user.name ? user.name[0].toUpperCase() : "U"}
                </div>
                
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            /* BEFORE LOGIN (Buttons Scaled Up) */
            <div className="flex items-center gap-4">
               <button
                onClick={() => navigate("/login")}
                className="text-gray-700 hover:text-blue-600 font-semibold transition text-base"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 text-base"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;