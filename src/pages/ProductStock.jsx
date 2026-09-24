import { useState } from "react";
import { Search } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProductStockTable from "../components/ProductStockTable";
import Stock1 from "../assets/stock-1.png";
import Stock2 from "../assets/stock-2.png";
import Stock3 from "../assets/stock-3.png";
import Stock4 from "../assets/stock-4.png";
import Stock5 from "../assets/stock-5.png";
import Stock6 from "../assets/stock-6.png";
import Stock7 from "../assets/stock-7.png";
const initialProducts = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    colors: ["#111827", "#9CA3AF", "#F4A79D"],
    image: Stock1,
  },
  {
    id: 2,
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#111827", "#F4A79D", "#60A5FA", "#F5C542"],
    image: Stock2,
  },
  {
    id: 3,
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#7C2D4A", "#93C5FD", "#0F172A", "#3B5FE0"],
    image: Stock3,
  },
  {
    id: 4,
    name: "Samsung A50",
    category: "Mobile",
    price: "$400.00",
    piece: 67,
    colors: ["#1E3A8A", "#111827", "#831843"],
    image: Stock4,
  },
  {
    id: 5,
    name: "Camera",
    category: "Electronic",
    price: "$420.00",
    piece: 52,
    colors: ["#1E3A8A", "#111827", "#831843"],
    image: Stock5,
  },
  {
    id: 6,
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#111827", "#F4A79D", "#60A5FA", "#F5C542"],
    image: Stock6,
  },
  {
    id: 7,
    name: "Women's Dress",
    category: "Fashion",
    price: "$640.00",
    piece: 635,
    colors: ["#7C2D4A", "#93C5FD", "#0F172A", "#3B5FE0"],
    image: Stock7,
  },
];

export default function ProductStock() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");

  // Real search - searchTerm-oda match aagura product mattum kaatum.

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  function handleDelete(id) {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Product Stock" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Product Stock" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Product Stock
            </h1>

            <div className="relative w-full sm:w-72">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search product name"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-gray-50 border border-gray-100 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <ProductStockTable
            products={filteredProducts}
            onDelete={handleDelete}
          />
        </main>
      </div>
    </div>
  );
}
