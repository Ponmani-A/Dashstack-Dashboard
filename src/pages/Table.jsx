import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OrderTable from "../components/OrderTable";
import ProductStockTable from "../components/ProductStockTable";
import Team1 from "../assets/team-1.png";
import Team2 from "../assets/team-2.png";

const orders = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "14 Feb 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "14 Feb 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "14 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "14 Feb 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "14 Feb 2019",
    type: "Medicine",
    status: "Completed",
  },
];

const initialProducts = [
  {
    id: 1,
    name: "Apple Watch Series 4",
    category: "Digital Product",
    price: "$690.00",
    piece: 63,
    colors: ["#111827", "#9CA3AF", "#F4A79D"],
    image: Team1,
  },
  {
    id: 2,
    name: "Microsoft Headsquare",
    category: "Digital Product",
    price: "$190.00",
    piece: 13,
    colors: ["#111827", "#F4A79D", "#60A5FA", "#F5C542"],
    image: Team2,
  },
];

export default function Table() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  function handleDelete(id) {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Table" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Table" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Table
          </h1>

          <OrderTable orders={orders} />

          <ProductStockTable products={products} onDelete={handleDelete} />
        </main>
      </div>
    </div>
  );
}
