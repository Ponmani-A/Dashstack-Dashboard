import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AddContact() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
  });

  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState("");

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      form.firstName.trim() === "" ||
      form.lastName.trim() === "" ||
      form.email.trim() === ""
    ) {
      setError("Please fill in first name, last name and email.");
      return;
    }

    setError("");

    const newContact = {
      id: Date.now(),
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      image:
        photoPreview ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(form.firstName + " " + form.lastName)}&size=400&background=E5E7EB&color=374151`,
    };

    // "dashstack_contacts" key-la save pannurom - Team members-oda key vera,
    // adhunala rendum mix aagaama separate ah store aagum
    const existing = JSON.parse(
      localStorage.getItem("dashstack_contacts") || "[]",
    );
    localStorage.setItem(
      "dashstack_contacts",
      JSON.stringify([newContact, ...existing]),
    );

    navigate("/contact");
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Add New Contact
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10"
          >
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-2.5 mb-6">
                {error}
              </p>
            )}

            <div className="flex flex-col items-center mb-10">
              <label className="cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Camera size={28} className="text-gray-700" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
              <label className="cursor-pointer text-blue-600 font-medium mt-3">
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="hidden"
                />
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={form.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={form.dob}
                  onChange={(e) => handleChange("dob", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 block mb-2">
                  Gender
                </label>
                <select
                  value={form.gender}
                  onChange={(e) => handleChange("gender", e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3.5 rounded-xl transition-colors"
              >
                Add Now
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
