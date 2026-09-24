import { useState } from "react";
import { Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";

function StarRating({ rating, reviewCount }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          className={
            n <= Math.round(rating)
              ? "text-orange-400 fill-orange-400"
              : "text-gray-300 fill-gray-300"
          }
        />
      ))}
      <span className="text-xs text-gray-400 ml-1">({reviewCount})</span>
    </div>
  );
}

export default function ProductCard({
  image,
  name,
  price,
  rating = 4,
  reviewCount = 0,
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="relative bg-gray-50 h-64 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="text-gray-300 text-sm">Image here</div>
        )}

        <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-100 hover:bg-white flex items-center justify-center shadow-sm">
          <ChevronLeft size={16} className="text-gray-600" />
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-100 hover:bg-white flex items-center justify-center shadow-sm">
          <ChevronRight size={16} className="text-gray-600" />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <p className="text-blue-600 font-semibold mt-1">{price}</p>
          </div>

          <button
            onClick={() => setLiked((prev) => !prev)}
            className="w-9 h-9 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center shrink-0"
          >
            <Heart
              size={18}
              className={liked ? "text-red-500 fill-red-500" : "text-gray-400"}
            />
          </button>
        </div>

        <div className="mt-2">
          <StarRating rating={rating} reviewCount={reviewCount} />
        </div>

        <button className="mt-4 w-full sm:w-auto bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium text-sm px-5 py-2.5 rounded-full transition-colors">
          Edit Product
        </button>
      </div>
    </div>
  );
}
