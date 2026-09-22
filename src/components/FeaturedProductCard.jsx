import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { name: "Beats Headphone 2019", price: "$89.00", image: "" },
  { name: "Apple Watch Series 6", price: "$399.00", image: "" },
  { name: "Sony WH-1000XM4", price: "$249.00", image: "" },
];

export default function FeaturedProductCard() {
  // "index" -> ippo edhu product kaatikitu irukom nu track pannurom
  const [index, setIndex] = useState(0);
  const product = products[index];

  function goPrev() {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1)); // 1 ===0 false so, pre - 1 na 1-1 =0 , index 0 product pogum
  }

  function goNext() {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Featured Product</h2>

      <div className="flex-1 flex items-center justify-between gap-2">
        <button
          onClick={goPrev}
          className="w-9 h-9 shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
        >
          <ChevronLeft size={18} className="text-gray-600" />
        </button>

        <div className="flex-1 h-32 flex items-center justify-center">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full object-contain"
            />
          ) : (
            <div className="w-24 h-24 rounded-xl bg-gray-50" />
          )}
        </div>

        <button
          onClick={goNext}
          className="w-9 h-9 shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
        >
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>

      <div className="text-center mt-4">
        <p className="font-semibold text-gray-900">{product.name}</p>
        <p className="text-blue-600 font-medium mt-1">{product.price}</p>
      </div>
    </div>
  );
}
