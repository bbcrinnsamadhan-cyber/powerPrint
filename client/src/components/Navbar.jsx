import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../services/api";
import { formatKES } from "../utils/currency";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, cartCount, wishlistCount, loading, logout } = useAuth();
  
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // 🔥 Suggestions List
  const [showSuggestions, setShowSuggestions] = useState(false); // Toggle Dropdown
  const searchRef = useRef(null); // Click outside handler

  // ⚡ Debounce Search Logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchTerm.trim().length > 1) {
        try {
          const { data } = await API.get(`/products/search?q=${searchTerm}&limit=5`);
          setSuggestions(data.products || []);
          setShowSuggestions(true);
        } catch (error) {
          console.error("Suggestion fetch failed");
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300); // 300ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // 🖱️ Click Outside to Close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/products?search=${searchTerm.trim()}`);
      setShowSuggestions(false);
      setIsMenuOpen(false);
    }
  };

  const handleSuggestionClick = (id) => {
    navigate(`/products/${id}`);
    setShowSuggestions(false);
    setSearchTerm("");
    setIsMenuOpen(false);
  };

  if (loading) return <div className="h-24 bg-white border-b"></div>; 

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex justify-between items-center gap-4">
        
        {/* LOGO */}
        <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer flex-shrink-0">
          <img src={logo} alt="PowerPrint Logo" className="h-12 md:h-16 w-auto object-contain transition-all" />
          
        </div>

        {/* --- 🔍 DESKTOP SEARCH WITH SUGGESTIONS --- */}
        <div className="hidden md:flex flex-1 max-w-2xl px-6 relative" ref={searchRef}>
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base transition-all duration-300 shadow-inner"
              placeholder="Search printers, ink, toners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              onFocus={() => searchTerm.length > 1 && setShowSuggestions(true)}
            />
          </div>

          {/* 🔥 DROPDOWN LIST */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-6 right-6 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
              <ul>
                {suggestions.map((p) => (
                  <li 
                    key={p._id} 
                    onClick={() => handleSuggestionClick(p._id)}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-none"
                  >
                    <img src={p.images[0]} alt={p.name} className="h-10 w-10 object-contain rounded bg-gray-50 border" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800 line-clamp-1">{p.name}</p>
                      <p className="text-xs text-gray-500">{p.category}</p>
                    </div>
                    <span className="text-sm font-bold text-blue-600">{formatKES(p.price)}</span>
                  </li>
                ))}
                <li onClick={() => handleSearch({ key: "Enter" })} className="p-3 text-center text-blue-600 text-sm font-bold bg-blue-50 hover:bg-blue-100 cursor-pointer">
                  View all results for "{searchTerm}"
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-5 flex-shrink-0">
          {user ? (
            <>
              {user.role === "admin" && (
                <Link to="/admin/dashboard" className="hidden xl:flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold border border-red-100 hover:bg-red-600 hover:text-white transition-all shadow-sm">Admin Panel</Link>
              )}
              <button onClick={() => navigate("/orders")} className="relative group text-gray-600 hover:text-blue-600 p-2"><svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg></button>
              <button onClick={() => navigate("/wishlist")} className="relative group text-gray-600 hover:text-red-500 p-2"><svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                {wishlistCount > 0 && <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>}
              </button>
              <button onClick={() => navigate("/cart")} className="relative group text-gray-600 hover:text-blue-600 p-2"><svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">{cartCount}</span>}
              </button>
              <div className="h-8 w-px bg-gray-300 mx-2"></div>
              <div className="flex items-center gap-3 pl-1 group relative">
                <div className="h-10 w-10 bg-gradient-to-tr from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md cursor-pointer hover:shadow-lg">{user.name[0]}</div>
                <button onClick={() => { logout(); navigate("/"); }} className="text-gray-400 hover:text-red-500" title="Logout"><svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg></button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
            
              <button onClick={() => navigate("/login")} className="bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg text-base">Get Started</button>
            </div>
          )}
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden flex items-center gap-4">
          {user && (
             <button onClick={() => navigate("/cart")} className="relative text-gray-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
               {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full border border-white">{cartCount}</span>}
             </button>
          )}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none p-2">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} /></svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU (With Suggestions Logic) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col p-4 animate-fade-in-down z-40">
          <div className="relative w-full mb-6">
            <input type="text" className="w-full pl-10 pr-4 py-3 bg-gray-100 border-none rounded-lg text-gray-900 outline-none" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleSearch} />
            <svg className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            
            {/* Mobile Suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white shadow-lg rounded-lg border border-gray-100 z-50">
                {suggestions.map((p) => (
                  <div key={p._id} onClick={() => handleSuggestionClick(p._id)} className="p-3 border-b border-gray-50 flex items-center gap-3">
                    <img src={p.images[0]} className="h-8 w-8 object-contain" alt=""/>
                    <div className="flex-1 truncate text-sm">{p.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Mobile Links (Same as before) */}
          <div className="flex flex-col gap-4">
             {/* ... (Mobile links code same as previous) ... */}
             <Link to="/products" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-gray-700 font-medium p-2">🛍️ Browse Products</Link>
             <button onClick={() => {logout(); navigate("/");}} className="text-red-500 font-medium p-2 text-left">🚪 Logout</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;