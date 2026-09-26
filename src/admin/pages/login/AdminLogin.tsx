import { useState } from "react";
import logo from "../../../assets/icons/logo-icon.png";

interface AdminLoginProps {
  onSuccess: () => void;
}

const AdminLogin = ({ onSuccess }: AdminLoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      sessionStorage.setItem("admin_authed", "true");
      onSuccess();
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="w-full max-w-sm px-4">
        {/* Card */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 p-8 space-y-6">
          {/* Logo + Title */}
          <div className="flex flex-col items-center gap-3">
            <img src={logo} alt="Mind & Wholeness" className="h-14 w-auto" />
            <div className="text-center">
              <h1 className="font-serif text-2xl font-semibold text-gray-800">Mind & Wholeness</h1>
              <p className="text-xs text-gray-400 mt-0.5 tracking-widest uppercase">Admin Portal</p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-500 text-xs rounded-xl px-4 py-2.5 text-center">
                {error}
              </div>
            )}
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          Mind & Wholeness © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
