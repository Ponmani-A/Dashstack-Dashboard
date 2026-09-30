// items - array of { id, description, quantity, baseCost }
// Total cost-ah items-la store pannala, quantity x baseCost nu inga calculate pannurom.
// Adhunala quantity illa cost maathina, total automatic ah correct ah maarum.
export default function InvoiceTable({ items }) {
  // .reduce() - array-la irukra ella item-oda total cost-ah onnu serthu grand total edukkum
  const grandTotal = items.reduce(
    (sum, item) => sum + item.quantity * item.baseCost,
    0,
  );

  return (
    <div>
      {/* overflow-x-auto - mobile la table perusa irundha, side ah scroll pannalam */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-sm text-center">
          <thead>
            <tr className="bg-gray-50 text-gray-700">
              <th className="px-4 py-4 font-medium rounded-l-xl">Serial No.</th>
              <th className="px-4 py-4 font-medium">Description</th>
              <th className="px-4 py-4 font-medium">Quantity</th>
              <th className="px-4 py-4 font-medium">Base Cost</th>
              <th className="px-4 py-4 font-medium rounded-r-xl">Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 last:border-0"
              >
                <td className="px-4 py-8 text-gray-800">{index + 1}</td>
                <td className="px-4 py-8 text-gray-800">{item.description}</td>
                <td className="px-4 py-8 text-gray-800">{item.quantity}</td>
                <td className="px-4 py-8 text-gray-800">${item.baseCost}</td>
                <td className="px-4 py-8 text-gray-800">
                  ${item.quantity * item.baseCost}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end items-center gap-6 border-t border-gray-100 pt-6 pr-4 sm:pr-14">
        <span className="font-bold text-gray-900">Total</span>
        <span className="font-bold text-gray-900">=</span>
        <span className="font-bold text-gray-900 text-lg">${grandTotal}</span>
      </div>
    </div>
  );
}
