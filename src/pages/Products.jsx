import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ProductCard from "../components/ProductCard";
import appleWatchImg from "../assets/blackwatch.png";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewCount: 131,
    image: appleWatchImg,
  },
  {
    id: 2,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewCount: 131,
    image: appleWatchImg,
  },
  {
    id: 3,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewCount: 131,
    image: appleWatchImg,
  },
];

export default function Products() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Products" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Products" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Products
          </h1>

          <PromoBanner />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                reviewCount={product.reviewCount}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
