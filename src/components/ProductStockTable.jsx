import { Pencil, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductStockTable({ products, onDelete }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="text-left border-b border-gray-100">
              <th className="px-6 py-4 font-semibold text-gray-700">Image</th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Product Name
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Category
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">Price</th>
              <th className="px-6 py-4 font-semibold text-gray-700">Piece</th>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Available Color
              </th>
              <th className="px-6 py-4 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
              >
                <td className="px-6 py-3">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-xl bg-gray-100" />
                  )}
                </td>
                <td className="px-6 py-3 text-gray-900 font-medium">
                  {product.name}
                </td>
                <td className="px-6 py-3 text-gray-500">{product.category}</td>
                <td className="px-6 py-3 text-gray-500">{product.price}</td>
                <td className="px-6 py-3 text-gray-500">{product.piece}</td>
                <td className="px-6 py-3">
                  {/* Ovvoru color-kum oru chinna circle. "colors" array-la hex code irukku */}
                  <div className="flex items-center gap-2">
                    {product.colors.map((color, i) => (
                      <span
                        key={i}
                        className="w-5 h-5 rounded-full border border-black/5"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-2">
                    <button className="w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center">
                      <Pencil size={15} className="text-gray-500" />
                    </button>
                    <button
                      onClick={() => onDelete(product.id)}
                      className="w-9 h-9 rounded-lg border border-red-100 hover:bg-red-50 flex items-center justify-center"
                    >
                      <Trash2 size={15} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center text-gray-400 py-10">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-sm text-gray-500">
          Showing 1-{String(products.length).padStart(2, "0")} of 78
        </p>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <ChevronLeft size={16} className="text-gray-500" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <ChevronRight size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
