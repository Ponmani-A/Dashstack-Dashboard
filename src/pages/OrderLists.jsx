import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OrderFilterBar from "../components/OrderFilterBar";
import OrderTable from "../components/OrderTable";

const allOrders = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    dateKey: "2019-8-4",
    type: "Electronics",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    dateKey: "2019-4-28",
    type: "Book & Stationary",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "23 Nov 2019",
    dateKey: "2019-10-23",
    type: "Health & Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    dateKey: "2019-1-5",
    type: "Mobile & Phone",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    dateKey: "2019-6-29",
    type: "Accessories",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "15 Aug 2019",
    dateKey: "2019-7-15",
    type: "Health & Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    date: "21 Dec 2019",
    dateKey: "2019-11-21",
    type: "Fashion & Beauty",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Rosie Todd",
    address: "New Jon",
    date: "30 Apr 2019",
    dateKey: "2019-3-30",
    type: "Health & Medicine",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    date: "09 Jan 2019",
    dateKey: "2019-0-9",
    type: "Book & Stationary",
    status: "In Transit",
  },
];

export default function OrderLists() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 3 filters ellame oru object-la vachurukom - dates, orderTypes, orderStatuses.
  // Ella array-um empty na, "filter onnum apply pannala" nu artham, ella orders-um kaatuvom.
  const [filters, setFilters] = useState({
    dates: [],
    orderTypes: [],
    orderStatuses: [],
  });

  const filteredOrders = allOrders.filter((order) => {
    const matchesDate =
      filters.dates.length === 0 || filters.dates.includes(order.dateKey);
    const matchesType =
      filters.orderTypes.length === 0 ||
      filters.orderTypes.includes(order.type);
    const matchesStatus =
      filters.orderStatuses.length === 0 ||
      filters.orderStatuses.includes(order.status);
    return matchesDate && matchesType && matchesStatus;
  });

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Order Lists" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Order Lists" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Order Lists
          </h1>

          <OrderFilterBar filters={filters} onFilterChange={setFilters} />

          <OrderTable
            orders={filteredOrders}
            isDateFiltered={filters.dates.length > 0}
          />
        </main>
      </div>
    </div>
  );
}
