import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(100000); 
  const [sortBy, setSortBy] = useState("default");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [searchParams] = useSearchParams();

  // 1. Fetch Data
  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data.products || []);
    } catch (error) {
      console.error("Fetch products failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ FIX 1: Sync URL Params (Category AND Search)
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    const searchFromUrl = searchParams.get("search"); // Navbar se jo search aaya

    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("All"); // Reset if no category in URL
    }

    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    } else {
      setSearchTerm(""); // Reset if no search in URL
    }
  }, [searchParams]); // Jab bhi URL change hoga, ye chalega

  const categories = useMemo(() => 
    ["All", ...new Set(products.map((p) => p.category))], 
    [products]
  );

  // ✅ FIX 2: Enhanced Search Logic (Name + Category + SubCategory)
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((product) => {
      const term = searchTerm.toLowerCase();

      // Check Name, Category, AND SubCategory
      const matchesSearch = 
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(term));

      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [products, searchTerm, selectedCategory, priceRange, sortBy]);

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {searchTerm ? `Results for "${searchTerm}"` : "Shop Products"} 
            <span className="text-gray-500 text-lg font-normal ml-2">
              ({filteredAndSortedProducts.length} items)
            </span>
          </h1>

          <div className="flex gap-4 w-full md:w-auto">
             <button 
               className="md:hidden flex-1 flex items-center justify-center gap-2 bg-white border px-4 py-2 rounded-lg shadow-sm font-medium"
               onClick={() => setShowMobileFilters(!showMobileFilters)}
             >
               Filters
             </button>

             <select 
               className="flex-1 md:w-48 px-4 py-2 border rounded-lg bg-white shadow-sm outline-none cursor-pointer"
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value)}
             >
               <option value="default">Sort By: Featured</option>
               <option value="price-low">Price: Low to High</option>
               <option value="price-high">Price: High to Low</option>
               <option value="newest">Newest Arrivals</option>
             </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 relative">
          
          {/* Sidebar Filters */}
          <aside className={`md:w-64 flex-shrink-0 space-y-8 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
            
            {/* Search Input (Local) */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Model, Ink, etc..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className={`ml-3 text-sm group-hover:text-blue-600 transition ${selectedCategory === cat ? 'font-semibold text-blue-600' : 'text-gray-600'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-3">Price Range</h3>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2 font-medium">
                <span>₹0</span>
                <span>Max: ₹{priceRange.toLocaleString()}</span>
              </div>
            </div>
            
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredAndSortedProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-dashed border-gray-300">
                <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
                <p className="mt-1 text-sm text-gray-500">Try searching for 'Printer', 'Ink', or specific models.</p>
                <button 
                  onClick={() => {setSearchTerm(""); setSelectedCategory("All"); setPriceRange(100000);}}
                  className="mt-6 text-blue-600 hover:underline font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;