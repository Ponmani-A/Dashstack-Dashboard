import { Filter, ChevronDown, RotateCcw } from "lucide-react";

// Ithு oru simple dropdown button - "Date", "Order Type", "Order Status" moonuக்கும் same design.
// Adhுனால் ithை oru chinna reusable piece ah eduthுக்கிட்டோம்.
function FilterDropdown({ label }) {
  return (
    <button className="flex items-center justify-between gap-2 px-5 py-4 text-sm font-medium text-gray-700 border-l border-gray-100 flex-1 hover:bg-gray-50">
      {label}
      <ChevronDown size={16} className="text-gray-400" />
    </button>
  );
}

// onReset prop - "Reset Filter" click pannina, parent-la irukra filter state ah clear pannurathukku
export default function OrderFilterBar({ onReset }) {
  return (
    <div className="flex items-stretch bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-center px-5">
        <Filter size={18} className="text-gray-400" />
      </div>

      <div className="flex items-center px-5 py-4 text-sm font-medium text-gray-700 border-l border-gray-100">
        Filter By
      </div>

      <FilterDropdown label="Date" />
      <FilterDropdown label="Order Type" />
      <FilterDropdown label="Order Status" />

      <button
        onClick={onReset}
        className="flex items-center gap-2 px-6 py-4 text-sm font-medium text-red-500 border-l border-gray-100 hover:bg-red-50 shrink-0"
      >
        <RotateCcw size={16} />
        Reset Filter
      </button>
    </div>
  );
}
