import { useState } from "react";
import { Printer, Send } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InvoiceTable from "../components/InvoiceTable";

const invoiceItems = [
  { id: 1, description: "Children Toy", quantity: 2, baseCost: 40 },
  { id: 2, description: "Makeup", quantity: 2, baseCost: 50 },
  { id: 3, description: "Asus Laptop", quantity: 5, baseCost: 100 },
  { id: 4, description: "Iphone X", quantity: 4, baseCost: 1000 },
];

export default function Invoice() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSend() {
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* "print:hidden" - Print pannumbodhu sidebar/navbar/buttons paper-la vara koodathu,
          invoice card mattum than print aaganum. Tailwind-oda built-in print variant ithu. */}
      <div className="hidden lg:block print:hidden">
        <Sidebar activePage="Invoice" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden print:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Invoice" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <div className="print:hidden">
          <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />
        </div>

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Invoice
          </h1>

          <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-10">
            {/* Header - mobile la keela keela stack, "md" mela 3 column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-gray-600 mb-3">Invoice From :</p>
                <p className="font-bold text-gray-900 text-lg">
                  Virginia Walker
                </p>
                <p className="text-gray-500 mt-1">
                  9694 Krajcik Locks Suite 635
                </p>
              </div>

              <div>
                <p className="text-gray-600 mb-3">Invoice To :</p>
                <p className="font-bold text-gray-900 text-lg">Austin Miller</p>
                <p className="text-gray-500 mt-1">Brookview</p>
              </div>

              <div className="space-y-3 md:pt-2">
                <p className="text-gray-700">Invoice Date : 12 Nov 2019</p>
                <p className="text-gray-700">Due Date : 25 Dec 2019</p>
              </div>
            </div>

            <InvoiceTable items={invoiceItems} />

            {/* Actions - Print paper-la varakoodathu (print:hidden) */}
            <div className="flex justify-end items-center gap-4 mt-10 print:hidden">
              <button
                onClick={() => window.print()}
                className="w-14 h-14 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center"
              >
                <Printer size={20} className="text-gray-800" />
              </button>

              <button
                onClick={handleSend}
                className="flex items-center gap-8 bg-blue-600 hover:bg-blue-700 text-white font-medium pl-8 pr-2 py-2 rounded-xl transition-colors"
              >
                {sent ? "Sent!" : "Send"}
                <span className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Send size={16} />
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
