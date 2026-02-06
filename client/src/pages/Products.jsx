import { useEffect, useState, useMemo, useRef } from "react"; // useRef added
import { useSearchParams, useNavigate } from "react-router-dom"; // useNavigate added
import API from "../services/api";
import ProductCard from "../components/ProductCard";
import { formatKES } from "../utils/currency";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter & Suggestion States
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // 🔥
  const [showSuggestions, setShowSuggestions] = useState(false); // 🔥
  const searchRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(100000);
  const [sortBy, setSortBy] = useState("default");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchParams] = useSearchParams();

  // Fetch Data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");
        setProducts(data.products || []);
      } catch (error) { console.error("Fetch failed"); } 
      finally { setLoading(false); }
    };
    fetchProducts();
  }, []);

  // Sync URL
  useEffect(() => {
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    if (category) setSelectedCategory(category);
    if (search) setSearchTerm(search);
  }, [searchParams]);

  // 🔥 Sidebar Suggestion Logic
  useEffect(() => {
    const delayFn = setTimeout(async () => {
      if (searchTerm.trim().length > 1) {
        try {
          const { data } = await API.get(`/products/search?q=${searchTerm}&limit=5`);
          setSuggestions(data.products || []);
          setShowSuggestions(true);
        } catch (e) {}
      } else {
        setSuggestions([]); setShowSuggestions(false);
      }
    }, 300);
    return () => clearTimeout(delayFn);
  }, [searchTerm]);

  // Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = useMemo(() => ["All", ...new Set(products.map((p) => p.category))], [products]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((product) => {
      const term = searchTerm.toLowerCase();
      const matchesSearch = product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term) || (product.subCategory && product.subCategory.toLowerCase().includes(term));
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      return matchesSearch && matchesCategory && matchesPrice;
    });
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "newest") result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return result;
  }, [products, searchTerm, selectedCategory, priceRange, sortBy]);

  if (loading) return <div className="min-h-screen flex justify-center items-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">Shop Products <span className="text-gray-500 text-lg font-normal">({filteredAndSortedProducts.length})</span></h1>
          <div className="flex gap-4 w-full md:w-auto">
             <button className="md:hidden flex-1 bg-white border px-4 py-2 rounded-lg shadow-sm font-medium" onClick={() => setShowMobileFilters(!showMobileFilters)}>Filters</button>
             <select className="flex-1 md:w-48 px-4 py-2 border rounded-lg bg-white shadow-sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
               <option value="default">Featured</option>
               <option value="price-low">Price: Low to High</option>
               <option value="price-high">Price: High to Low</option>
               <option value="newest">Newest</option>
             </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* SIDEBAR */}
          <aside className={`md:w-64 flex-shrink-0 space-y-8 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
            
            {/* 🔥 SEARCH WITH SUGGESTIONS */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 relative" ref={searchRef}>
              <h3 className="font-bold text-gray-800 mb-3">Search</h3>
              <div className="relative">
                <input type="text" placeholder="Refine search..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onFocus={() => searchTerm.length > 1 && setShowSuggestions(true)}
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>

              {/* Sidebar Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 z-50 overflow-hidden">
                  {suggestions.map((p) => (
                    <div key={p._id} onClick={() => {navigate(`/products/${p._id}`); setShowSuggestions(false);}} className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50">
                      <img src={p.images[0]} className="h-8 w-8 object-contain" alt=""/>
                      <div className="flex-1 truncate text-xs font-medium">{p.name}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Categories */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">Categories</h3>
              <div className="space-y-2 max-h-64 overflow-y-auto custom-scrollbar">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer group">
                    <input type="radio" name="category" value={cat} checked={selectedCategory === cat} onChange={(e) => setSelectedCategory(e.target.value)} className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <span className={`ml-3 text-sm group-hover:text-blue-600 transition ${selectedCategory === cat ? 'font-semibold text-blue-600' : 'text-gray-600'}`}>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">Max Price</h3>
              <input type="range" min="0" max="100000" step="1000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-sm text-gray-600 mt-2 font-medium"><span>0</span><span>{formatKES(priceRange)}</span></div>
            </div>
          </aside>

          {/* GRID */}
          <div className="flex-1">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-dashed border-gray-300">
                <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                <button onClick={() => {setSearchTerm(""); setSelectedCategory("All"); setPriceRange(100000);}} className="mt-4 text-blue-600 hover:underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => <ProductCard key={product._id} product={product} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;