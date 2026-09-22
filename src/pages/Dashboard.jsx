import { useState } from "react";
import { Users, Package, LineChart, History } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import SalesChart from "../components/SalesChart";
import DealsTable from "../components/DealsTable";
import RevenueChart from "../components/RevenueChart";
import CustomersCard from "../components/CustomersCard";
import FeaturedProductCard from "../components/FeaturedProductCard";
import SalesAnalyticsChart from "../components/SalesAnalyticsChart";

const stats = [
  {
    title: "Total User",
    value: "40,689",
    icon: Users,
    iconBg: "bg-indigo-100 text-indigo-600",
    trend: "up",
    trendValue: "8.5%",
    trendText: "Up from yesterday",
  },
  {
    title: "Total Order",
    value: "10293",
    icon: Package,
    iconBg: "bg-amber-100 text-amber-600",
    trend: "up",
    trendValue: "1.3%",
    trendText: "Up from past week",
  },
  {
    title: "Total Sales",
    value: "$89,000",
    icon: LineChart,
    iconBg: "bg-emerald-100 text-emerald-600",
    trend: "down",
    trendValue: "4.3%",
    trendText: "Down from yesterday",
  },
  {
    title: "Total Pending",
    value: "2040",
    icon: History,
    iconBg: "bg-orange-100 text-orange-600",
    trend: "up",
    trendValue: "1.8%",
    trendText: "Up from yesterday",
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar activePage="Dashboard" />

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Dashboard" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((item) => (
              <StatCard key={item.title} {...item} />
            ))}
          </div>

          <SalesChart />

          <DealsTable />
        </main>
      </div>
    </div>
  );
}
