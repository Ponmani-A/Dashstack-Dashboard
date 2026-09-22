import { ChevronLeft, ChevronRight } from "lucide-react";

// Status name -> color classes mapping. Order data la "status: 'Completed'" nu irundha,
// ithே object la irundhu andha color eduthுக்குவோம் (StatCard/EmailList la panna maadhiri pattern than)
const statusStyles = {
  Completed: "bg-emerald-100 text-emerald-600",
  Processing: "bg-indigo-100 text-indigo-600",
  Rejected: "bg-red-100 text-red-500",
  "On Hold": "bg-orange-100 text-orange-500",
  "In Transit": "bg-purple-100 text-purple-600",
};

// Sample orders - real app la API/DB-la irundhu varum. Innum order add pannanum na,
// ithே array la oru object add pannina podhum
const orders = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Rosie Todd",
    address: "New Jon",
    date: "30 Apr 2019",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
];

export default function OrderTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      {/* overflow-x-auto - mobile la table perusa irundha, side ah scroll pannalam */}
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
          </tbody>
        </table>
      </div>

      {/* Pagination footer */}
      <div className="flex items-center justify-between px-6 py-4">
        <p className="text-sm text-gray-500">Showing 1-09 of 78</p>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <ChevronLeft size={16} className="text-gray-500" />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center">
            <ChevronRight size={16} className="text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
