import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const AdminLayout = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // 📱 Sidebar Toggle State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // 🔒 Protect Admin Route
  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== "admin") {
        navigate("/login");
      }
    }
  }, [user, loading, navigate]);

  if (loading) return <div className="p-10 text-center">Loading Admin Panel...</div>;

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Products", path: "/admin/products", icon: "📦" },
    { name: "Orders", path: "/admin/orders", icon: "🚚" },
    { name: "Add Product", path: "/admin/products/add", icon: "➕" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      
      {/* --- MOBILE HEADER (Visible only on small screens) --- */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-slate-900 text-white z-50 px-4 h-16 flex items-center justify-between shadow-md">
        <h2 className="text-xl font-bold tracking-tight">Admin<span className="text-blue-500">Panel</span></h2>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md hover:bg-slate-800 focus:outline-none"
        >
          {isSidebarOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>
      </div>

      {/* --- OVERLAY (Backdrop for mobile) --- */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* --- SIDEBAR (Responsive) --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        pt-16 md:pt-0 flex flex-col h-full
      `}>
        
        {/* Desktop Logo Header */}
        <div className="hidden md:flex p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold tracking-tight">Admin<span className="text-blue-500">Panel</span></h2>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsSidebarOpen(false)} // Mobile par click karte hi close ho jaye
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-700 bg-slate-900">
          <button 
            onClick={() => { logout(); navigate("/"); }}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-0 bg-gray-50">
        <div className="p-4 sm:p-8">
          <Outlet /> {/* Child Pages */}
        </div>
      </main>

    </div>
  );
};

export default AdminLayout;