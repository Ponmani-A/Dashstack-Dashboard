import appleWatchImg from "../assets/applewatch.png";
// Table ku status color venum, adhukku oru chinna helper function
function StatusBadge({ status }) {
  const styles = {
    Delivered: "bg-emerald-100 text-emerald-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-4 py-1.5 rounded-full text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-600"}`}
    >
      {status}
    </span>
  );
}

const deals = [
  {
    id: 1,
    image: appleWatchImg,
    name: "Apple Watch",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12.53 PM",
    piece: 423,
    amount: "$34,295",
    status: "Delivered",
  },
];

export default function DealsTable() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">Deals Details</h2>
        <select className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 outline-none">
          <option>October</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-100">
              <th className="py-3 font-medium">Product Name</th>
              <th className="py-3 font-medium">Location</th>
              <th className="py-3 font-medium">Date - Time</th>
              <th className="py-3 font-medium">Piece</th>
              <th className="py-3 font-medium">Amount</th>
              <th className="py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr
                key={deal.id}
                className="border-b border-gray-50 last:border-0"
              >
                <td className="py-4 flex items-center gap-3 font-medium text-gray-800">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-9 h-9 rounded-lg"
                  />
                  {deal.name}
                </td>
                <td className="py-4 text-gray-500">{deal.location}</td>
                <td className="py-4 text-gray-500">{deal.date}</td>
                <td className="py-4 text-gray-500">{deal.piece}</td>
                <td className="py-4 text-gray-500">{deal.amount}</td>
                <td className="py-4">
                  <StatusBadge status={deal.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
