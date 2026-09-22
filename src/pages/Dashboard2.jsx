import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RevenueChart from "../components/RevenueChart";
import CustomersCard from "../components/CustomersCard";
import FeaturedProductCard from "../components/FeaturedProductCard";
import SalesAnalyticsChart from "../components/SalesAnalyticsChart";

// Idhu Dashboard2 - Sidebar and Navbar reuse pannirukom (Dashboard.jsx la use panradhu ethuvo, adhே thaan).
// Kezha irukra 4 sections mattum puthusa - RevenueChart, CustomersCard, FeaturedProductCard, SalesAnalyticsChart
export default function Dashboard2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar activePage="Dashboard2" />

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Dashboard2" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          {/* Top full-width Revenue chart */}
          <RevenueChart />

          {/* Keela 3 column grid - mobile la 1 column, desktop la 3 column */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CustomersCard />
            <FeaturedProductCard />
            <SalesAnalyticsChart />
          </div>
        </main>
      </div>
    </div>
  );
}
