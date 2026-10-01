import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";

const initialContacts = [
  {
    id: 1,
    name: "Jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  },
];

// AddContact.jsx-la "localStorage.setItem('dashstack_contacts', ...)" nu save
// pannirundhom. Idha inga padikkurom, puthusa add panna contacts top-la varum.
function loadContacts() {
  const stored = JSON.parse(localStorage.getItem("dashstack_contacts") || "[]");
  return [...stored, ...initialContacts];
}

export default function Contact() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contacts, setContacts] = useState(loadContacts);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Contact" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Contact" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Contact
            </h1>

            {/* Click pannina, inline form illama, "Add New Contact" page-kku pogum */}
            <button
              onClick={() => navigate("/add-contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              Add New Contact
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                email={contact.email}
                image={contact.image}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
