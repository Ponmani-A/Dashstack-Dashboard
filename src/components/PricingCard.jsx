export default function PricingCard({
  planName,
  price,
  features,
  highlighted = false,
}) {
  return (
    <div className="relative bg-white rounded-2xl border border-gray-100 p-8 flex flex-col text-center overflow-hidden">
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-gray-900">{planName}</h3>
        <p className="text-gray-400 mt-2">Monthly Charge</p>
        <p className="text-5xl font-extrabold text-blue-600 mt-4">{price}</p>

        <div className="border-t border-gray-100 my-8" />

        <div className="space-y-6 flex-1">
          {features.map((feature) => (
            <p
              key={feature.text}
              className={
                feature.active ? "text-gray-900 font-medium" : "text-gray-300"
              }
            >
              {feature.text}
            </p>
          ))}
        </div>

        <div className="border-t border-gray-100 my-8" />

        <button
          className={`w-full py-3.5 rounded-full font-semibold transition-colors ${
            highlighted
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          }`}
        >
          Get Started
        </button>

        <a
          href="#"
          className="text-sm text-gray-700 font-medium underline mt-4"
        >
          Start Your 30 Day Free Trial
        </a>
      </div>
    </div>
  );
}
