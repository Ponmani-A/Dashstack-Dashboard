import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {
  BarChartSection,
  PieChartSection,
  DonutChartSection,
} from "../components/UiCharts";

const filterOptions = ["Charts", "Bar Chart", "Pie Chart", "Donut Chart"];

export default function UIElements() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("Charts");
  const [filterOpen, setFilterOpen] = useState(false);

  function handleSelect(option) {
    setFilter(option);
    setFilterOpen(false);
  }

  // "Charts" (all) illana, adhe filter value match aagura section mattum kaattum
  const showBar = filter === "Charts" || filter === "Bar Chart";
  const showPie = filter === "Charts" || filter === "Pie Chart";
  const showDonut = filter === "Charts" || filter === "Donut Chart";

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="UI Elements" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="UI Elements" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              UI Elements
            </h1>

            <div className="flex items-stretch bg-white rounded-2xl border border-gray-100 self-start sm:self-auto">
              <div className="flex items-center px-5">
                <Filter size={18} className="text-gray-400" />
              </div>
              <div className="flex items-center px-5 py-4 text-sm font-medium text-gray-700 border-l border-gray-100">
                Filter By
              </div>

              <div className="relative border-l border-gray-100">
                <button
                  onClick={() => setFilterOpen((prev) => !prev)}
                  className="flex items-center justify-between gap-10 px-5 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 h-full"
                >
                  {filter}
                  <ChevronDown
                    size={18}
                    className={`text-black transition-transform ${filterOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {filterOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setFilterOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 z-50 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-44">
                      {filterOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 ${
                            filter === option
                              ? "text-blue-600 font-medium bg-blue-50"
                              : "text-gray-700"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {showBar && <BarChartSection />}
          {showPie && <PieChartSection />}
          {showDonut && <DonutChartSection />}
        </main>
      </div>
    </div>
  );
}
