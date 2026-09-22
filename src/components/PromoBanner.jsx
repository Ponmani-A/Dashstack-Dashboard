import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PromoBanner({}) {
  return (
    <div className="relative bg-blue-600 rounded-2xl px-6 sm:px-10 py-10 sm:py-14 overflow-hidden">
      <button className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center">
        <ChevronLeft size={20} className="text-gray-700" />
      </button>

      <button className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center">
        <ChevronRight size={20} className="text-gray-700" />
      </button>

      <div className="relative max-w-xl mx-8 sm:mx-16">
        <p className="text-blue-100 text-sm mb-3">September 12-22</p>
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Enjoy free home delivery in this summer
        </h2>
        <p className="text-blue-100 mb-6">
          Designer Dresses - Pick from trendy Designer Dress.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}
