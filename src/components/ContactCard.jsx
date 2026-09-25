import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactCard({ name, email, image }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />

      <div className="p-5 text-center">
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{email}</p>

        {/* Message click pannina, Inbox page-ku kootitu pogum - real navigation */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-medium py-2.5 rounded-xl mt-4 transition-colors">
          <Mail size={16} />
          Message
        </button>
      </div>
    </div>
  );
}
