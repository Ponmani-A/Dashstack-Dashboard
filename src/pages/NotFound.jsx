import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-blue-500 flex items-center justify-center overflow-hidden p-4">
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-400/40 rounded-full blur-2xl" />
      <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] bg-blue-400/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] bg-blue-600/30 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10 text-center">
        <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-lg mx-auto">
          <div className="bg-blue-50 px-4 py-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="h-2 w-16 rounded-full bg-blue-200 ml-2" />
          </div>

          <div className="bg-blue-500 px-6 py-10 relative">
            <p className="text-6xl font-extrabold text-orange-400 text-center tracking-wide">
              404
            </p>

            {/* Decorative skeleton lines - bottom left */}
            <div className="flex flex-col gap-2 mt-8 w-20">
              <span className="h-2 rounded-full bg-white/70 w-12" />
              <span className="h-2 rounded-full bg-white/70 w-20" />
            </div>

            {/* Decorative dots - bottom right */}
            <div className="absolute bottom-6 right-6 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white/70" />
              <span className="w-2 h-2 rounded-full bg-white/70" />
              <span className="w-2 h-2 rounded-full bg-white/70" />
            </div>
          </div>
        </div>

        <p className="text-xl font-bold text-gray-800 mt-8">
          Looks like you've got lost....
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl mt-6 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
