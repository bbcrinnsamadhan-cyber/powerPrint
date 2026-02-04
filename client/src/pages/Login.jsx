import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation, Link } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png"; // Apna logo import karo

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { fetchUserMeta } = useAuth();
  const [error, setError] = useState("");

  const redirectTo = location.state?.from || "/";

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);

      // Backend call
      const res = await API.post("/auth/google", {
        name: decoded.name,
        email: decoded.email,
        googleId: decoded.sub,
      });

      // Token save karo
      localStorage.setItem("token", res.data.token);

      // Context update karo
      await fetchUserMeta();

      // Redirect user
      navigate(redirectTo, { replace: true });

    } catch (err) {
      console.error("Google login failed", err);
      setError("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center">
          <img
            className="mx-auto h-16 w-auto object-contain mb-4"
            src={logo}
            alt="PowerPrint Logo"
          />
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to access your account and orders
          </p>
        </div>

        {/* --- ERROR MESSAGE --- */}
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg text-center border border-red-100 animate-pulse">
            {error}
          </div>
        )}

        {/* --- GOOGLE BUTTON SECTION --- */}
        <div className="mt-8 space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Continue with
              </span>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => setError("Google Login Failed")}
              theme="filled_blue" // 'outline' | 'filled_black' | 'filled_blue'
              shape="pill"       // 'rect' | 'pill' | 'circle' | 'square'
              size="large"
              width="300"        // Button width control
              text="continue_with"
            />
          </div>
        </div>

        {/* --- FOOTER LINKS --- */}
        <div className="mt-6 text-center text-xs text-gray-400">
          <p>
            By continuing, you agree to our{" "}
            <a href="#" className="underline hover:text-gray-600">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-gray-600">Privacy Policy</a>.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;