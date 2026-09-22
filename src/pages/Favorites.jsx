import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PromoBanner from "../components/PromoBanner";
import ProductCard from "../components/ProductCard";
import FavoriteWatch from "../assets/favorite-watch.png";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    price: "$120.00",
    rating: 4,
    reviewCount: 131,
    image: FavoriteWatch,
  },
  {
    id: 2,
    name: "Air-Max-270",
    price: "$60.00",
    rating: 4,
    reviewCount: 64,
    image: FavoriteWatch,
  },
  {
    id: 3,
    name: "Minimal Chair Tool",
    price: "$24.59",
    rating: 5,
    reviewCount: 63,
    image: FavoriteWatch,
  },
  {
    id: 4,
    name: "Amazfit Vip",
    price: "$78.35",
    rating: 5,
    reviewCount: 154,
    image: FavoriteWatch,
  },
  {
    id: 5,
    name: "Gumbo Mouse",
    price: "$32.42",
    rating: 5,
    reviewCount: 35,
    image: FavoriteWatch,
  },
  {
    id: 6,
    name: "Camera Tripod",
    price: "$50.00",
    rating: 4,
    reviewCount: 535,
    image: FavoriteWatch,
  },
];

export default function Favorites() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar activePage="Favorites" />

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
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Favorites
          </h1>

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
