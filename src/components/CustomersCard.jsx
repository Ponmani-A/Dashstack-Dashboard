export default function CustomersCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 flex flex-col">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Customers</h2>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <div className="absolute inset-0 rounded-full border-[10px] border-blue-100" />

          <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
          <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
          <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
          <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
        </div>
      </div>

      <div className="flex items-center justify-around mt-6 pt-4 border-t border-gray-50">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">34,249</p>
          <div className="flex items-center gap-1.5 justify-center mt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            <span className="text-xs text-gray-500">New Customers</span>
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">1420</p>
          <div className="flex items-center gap-1.5 justify-center mt-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-200" />
            <span className="text-xs text-gray-500">Repeated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
