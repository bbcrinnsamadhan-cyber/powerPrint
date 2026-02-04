import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import { formatKES } from "../utils/currency";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, fetchUserMeta } = useAuth();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(""); // For Gallery
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // 1. Fetch Product Data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);
        setProduct(data.product);
        // Default select first image
        if (data.product.images && data.product.images.length > 0) {
          setSelectedImage(data.product.images[0]);
        }
      } catch (error) {
        console.error("Product fetch failed");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // 2. Add to Cart Logic
  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    setIsAdding(true);
    try {
      await API.post("/cart/add", { productId: product._id, quantity });
      await fetchUserMeta(); // Update Navbar Badge
      
      // Optional: Success Feedback (Toast)
      // toast.success("Added to cart!"); 
      
    } catch (error) {
      console.error("Add to cart failed");
    } finally {
      // Small delay for UX
      setTimeout(() => setIsAdding(false), 500);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return <p className="text-center mt-20">Product not found</p>;
  }

  const isOutOfStock = product.stock <= 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <span className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/products")}>Products</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
          
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center p-8 relative group">
               <img 
                 src={selectedImage} 
                 alt={product.name} 
                 className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
               />
               {/* Category Tag */}
               <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-600 shadow-sm">
                 {product.category}
               </span>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`
                      w-20 h-20 flex-shrink-0 rounded-lg border-2 bg-gray-50 p-2
                      ${selectedImage === img ? "border-blue-600" : "border-transparent hover:border-gray-300"}
                    `}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="mt-10 lg:mt-0 flex flex-col h-full">
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {product.name}
            </h1>

            {/* Rating Placeholder */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">(120 Reviews)</span>
            </div>

            <div className="text-4xl font-extrabold text-blue-600 mb-6">
              {formatKES(product.price)}
            </div>

            {/* Stock Status */}
            <div className="mb-8">
               {isOutOfStock ? (
                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-semibold">
                   <span className="w-2 h-2 rounded-full bg-red-600"></span> Out of Stock
                 </span>
               ) : (
                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                   <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span> In Stock ({product.stock} available)
                 </span>
               )}
            </div>

            {/* Description */}
            <div className="prose prose-sm text-gray-600 mb-8 border-t border-b border-gray-100 py-6">
              <p>{product.description || "No description available for this product."}</p>
            </div>

            {/* Actions */}
            <div className="mt-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-xl h-14 w-full sm:w-32 justify-between px-2">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={isOutOfStock || quantity <= 1}
                    className="p-2 text-gray-500 hover:text-gray-900 disabled:opacity-30"
                  >-</button>
                  <span className="font-bold text-lg">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    disabled={isOutOfStock || quantity >= product.stock}
                    className="p-2 text-gray-500 hover:text-gray-900 disabled:opacity-30"
                  >+</button>
                </div>

                {/* Add To Cart Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={isOutOfStock || isAdding}
                  className={`
                    flex-1 h-14 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95
                    ${isOutOfStock 
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed" 
                      : "bg-gray-900 text-white hover:bg-blue-600 hover:shadow-blue-500/30"
                    }
                  `}
                >
                  {isAdding ? (
                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : isOutOfStock ? (
                    "Unavailable"
                  ) : (
                    <>
                      Add to Cart
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </>
                  )}
                </button>

                {/* Wishlist Button (Optional) */}
                <button className="h-14 w-14 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition shadow-sm">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
              </div>
            </div>
          
          </div>
        </div>

       

      </div>
    </div>
  );
};

export default ProductDetails;