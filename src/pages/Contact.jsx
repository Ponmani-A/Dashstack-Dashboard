import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ContactCard from "../components/ContactCard";
import contactimg1 from "../assets/cont-img-1.png";
import contactimg2 from "../assets/cont-img-2.png";
import contactimg3 from "../assets/cont-img-3.png";
import contactimg4 from "../assets/cont-img-4.png";
import contactimg5 from "../assets/cont-img-5.png";
import contactimg6 from "../assets/cont-img-6.png";

const initialContacts = [
  {
    id: 1,
    name: "Jason Price",
    email: "kuhlman.jermey@yahoo.com",
    image: contactimg2,
  },
  {
    id: 2,
    name: "Duane Dean",
    email: "rusty.botsford@wilfrid.io",
    image: contactimg1,
  },
  {
    id: 3,
    name: "Jonathan Barker",
    email: "cora_haley@quinn.biz",
    image: contactimg3,
  },
  {
    id: 4,
    name: "Rosie Glover",
    email: "lockman.marques@hotmail.com",
    image: contactimg4,
  },
  {
    id: 5,
    name: "Patrick Greer",
    email: "pearlie.eichmann@trevion.net",
    image: contactimg5,
  },
  {
    id: 6,
    name: "Darrell Ortega",
    email: "chaya.shields@ferry.info",
    image: contactimg6,
  },
];

export default function Contact() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contacts, setContacts] = useState(initialContacts);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  function handleAddContact() {
    if (newName.trim() === "" || newEmail.trim() === "") return;

    const newContact = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(newName)}&size=400&background=E5E7EB&color=374151`,
    };
    setContacts((prev) => [newContact, ...prev]);
    setNewName("");
    setNewEmail("");
    setShowAddForm(false);
  }

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
            <button
              onClick={() => setShowAddForm((prev) => !prev)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-xl transition-colors shrink-0"
            >
              Add New Contact
            </button>
          </div>

          {/* Add contact inline form - "showAddForm" true na mattum theriyum */}
          {showAddForm && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                autoFocus
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Name"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddContact()}
                placeholder="Email"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button
                onClick={handleAddContact}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl shrink-0"
              >
                Add
              </button>
            </div>
          )}

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
