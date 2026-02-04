import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

// 🔥 Skeleton Loader
const ProductSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 animate-pulse">
    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
    <div className="h-10 bg-gray-200 rounded"></div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // 🧠 SMART FILTERING LOGIC
  
  // 1. Printers: Strictly 'Printer' category
  const printers = products
    .filter((p) => p.category === "Printer")
    .slice(0, 4);

  // 2. Scanners: Strictly 'Scanner' category
  const scanners = products
    .filter((p) => p.category === "Scanner")
    .slice(0, 4);

  // 3. Inks & Consumables: Group all ink/toner/tape types
  const consumables = products
    .filter((p) => [
      "Ink Bottle", 
      "Ink Cartridge", 
      "Toner Cartridge", 
      "Drum Unit", 
      "Label Tape", 
      "Label Roll"
    ].includes(p.category))
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-center">
          <span className="bg-blue-500/20 text-blue-200 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-400/30 mb-6 uppercase tracking-wider">
            Trusted Products
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Professional Printing <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
              Solutions for Business
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            From high-speed document scanners to heavy-duty laser printers. 
            Get genuine products with official warranty.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/products?category=Printer")}
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-blue-900/50 hover:-translate-y-1"
            >
              Shop Printers
            </button>
            <button
              onClick={() => navigate("/products?category=Ink Cartridge")}
              className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition backdrop-blur-sm"
            >
              Buy Inks
            </button>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">

        {/* --- 1. PRINTERS SECTION --- */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg text-xl">🖨️</span>
              Office Printers
            </h2>
            <button onClick={() => navigate("/products?category=Printer")} className="text-sm font-semibold text-blue-600 hover:underline">
              View More
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading 
              ? [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)
              : printers.map((product) => <ProductCard key={product._id} product={product} />)
            }
          </div>
        </section>

        {/* --- 2. SCANNERS SECTION --- */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-purple-100 text-purple-600 p-2 rounded-lg text-xl">📄</span>
              Document Scanners
            </h2>
            <button onClick={() => navigate("/products?category=Scanner")} className="text-sm font-semibold text-blue-600 hover:underline">
              View More
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading 
              ? [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)
              : scanners.map((product) => <ProductCard key={product._id} product={product} />)
            }
          </div>
        </section>

        {/* --- BANNER BREAK --- */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl">
           <div className="mb-6 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Need Ink or Toner?</h3>
              <p className="text-gray-400">Genuine supplies ensure your printer lasts longer.</p>
           </div>
           <button 
             onClick={() => navigate("/products?category=Ink Cartridge")}
             className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg"
           >
             Shop Consumables
           </button>
        </div>

        {/* --- 3. INKS & CONSUMABLES SECTION --- */}
        <section>
           <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg text-xl">🧴</span>
              Inks, Toners & Tapes
            </h2>
            <button onClick={() => navigate("/products?category=Ink Bottle")} className="text-sm font-semibold text-blue-600 hover:underline">
              View More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {loading 
              ? [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)
              : consumables.map((product) => <ProductCard key={product._id} product={product} />)
            }
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;