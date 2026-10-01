import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Check } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email.trim() === "" || password.trim() === "") {
      setError("Please enter both email and password.");
      return;
    }

    const userDetails = {
      email: email,
      password: password,
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    setError("");
    navigate("/Dashboard");
  }

  return (
    <div className="relative min-h-screen bg-blue-500 flex items-center justify-center overflow-hidden p-4">
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-400/40 rounded-full blur-2xl" />
      <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] bg-blue-600/30 rounded-full blur-3xl" />

      {/* Login card - "relative z-10" potradhaala, background blobs-ku mela varum */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Login to Account
        </h1>
        <p className="text-gray-500 text-center mt-3">
          Please enter your email and password to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5">
              {error}
            </p>
          )}

          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Email address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="esteban_schiller@gmail.com"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-gray-500 hover:text-blue-600"
              >
                Forget Password?
              </Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 pr-12 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer w-fit">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                remember ? "bg-blue-600 border-blue-600" : "border-gray-300"
              }`}
            >
              {remember && (
                <Check size={13} className="text-white" strokeWidth={3} />
              )}
            </span>
            <span className="text-sm text-gray-600">Remember Password</span>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-colors"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/" className="text-blue-600 font-medium underline">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
