import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";

// Ovvoru plan-kum feature list - "active: false" na, andha feature
// grey ah kaatum (andha plan-la ithu "illa" nu artham)
const plans = [
  {
    planName: "Basic",
    price: "$14.99",
    highlighted: false,
    features: [
      { text: "Free Setup", active: true },
      { text: "Bandwidth Limit 10 GB", active: true },
      { text: "20 User Connection", active: true },
      { text: "Analytics Report", active: false },
      { text: "Public API Access", active: false },
      { text: "Plugins Intregation", active: false },
      { text: "Custom Content Management", active: false },
    ],
  },
  {
    planName: "Standard",
    price: "$49.99",
    highlighted: false,
    features: [
      { text: "Free Setup", active: true },
      { text: "Bandwidth Limit 10 GB", active: true },
      { text: "20 User Connection", active: true },
      { text: "Analytics Report", active: true },
      { text: "Public API Access", active: true },
      { text: "Plugins Intregation", active: false },
      { text: "Custom Content Management", active: false },
    ],
  },
  {
    planName: "Premium",
    price: "$89.99",
    highlighted: true,
    features: [
      { text: "Free Setup", active: true },
      { text: "Bandwidth Limit 10 GB", active: true },
      { text: "20 User Connection", active: true },
      { text: "Analytics Report", active: true },
      { text: "Public API Access", active: true },
      { text: "Plugins Intregation", active: true },
      { text: "Custom Content Management", active: true },
    ],
  },
];

export default function Pricing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Pricing" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Pricing" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Pricing
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <PricingCard key={plan.planName} {...plan} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
