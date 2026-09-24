import { ChevronLeft, ChevronRight } from "lucide-react";

const statusStyles = {
  Completed: "bg-emerald-100 text-emerald-600",
  Processing: "bg-indigo-100 text-indigo-600",
  Rejected: "bg-red-100 text-red-500",
  "On Hold": "bg-orange-100 text-orange-500",
  "In Transit": "bg-purple-100 text-purple-600",
};

// orders - filter pannina result, OrderLists.jsx (parent) la irundhu varum.
// isDateFiltered - true na, footer "Prev. Date / Next Date" ah maarum
export default function OrderTable({ orders, isDateFiltered }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-sm">
          <thead>
            <tr className="text-left border-b border-gray-100">
              <th className="px-6 py-4 font-semibold text-gray-500 text-xs tracking-wide">
                ID
              </th>
              <th className="px-6 py-4 font-semibold text-gray-500 text-xs tracking-wide">
                NAME
              </th>
              <th className="px-6 py-4 font-semibold text-gray-500 text-xs tracking-wide">
                ADDRESS
              </th>
              <th className="px-6 py-4 font-semibold text-gray-500 text-xs tracking-wide">
                DATE
              </th>
              <th className="px-6 py-4 font-semibold text-gray-500 text-xs tracking-wide">
                TYPE
              </th>
              <th className="px-6 py-4 font-semibold text-gray-500 text-xs tracking-wide">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-gray-700">{order.id}</td>
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {order.name}
                </td>
                <td className="px-6 py-4 text-gray-500">{order.address}</td>
                <td className="px-6 py-4 text-gray-500">{order.date}</td>
                <td className="px-6 py-4 text-gray-500">{order.type}</td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-3 py-1.5 rounded-md ${statusStyles[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center text-gray-400 py-10">
                  No orders match the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        {isDateFiltered ? (
          <>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              <ChevronLeft size={15} />
              Prev. Date
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
              Next Date
              <ChevronRight size={15} />
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500">
              Showing 1-{orders.length.toString().padStart(2, "0")} of 78
            </p>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
                <ChevronLeft size={16} className="text-gray-500" />
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
                <ChevronRight size={16} className="text-gray-500" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
