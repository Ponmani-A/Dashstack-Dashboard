export default function TeamCard({ name, role, email, image }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 px-4 py-8 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-36 h-36 rounded-full object-cover"
      />

      <h3 className="font-bold text-gray-900 text-lg mt-6">{name}</h3>
      <p className="text-gray-500 mt-1">{role}</p>

      <p className="text-gray-600 text-sm mt-3 break-all">{email}</p>
    </div>
  );
}
