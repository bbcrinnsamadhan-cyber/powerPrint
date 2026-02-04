import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"; 
import Checkout from "./pages/Checkout";
// 👈 Yeh import zaroori hai
import MyOrders from "./pages/MyOrders";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<MyOrders />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
