import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EventsPanel from "../components/EventsPanel";
import CalendarGrid from "../components/CalendarGrid";
import { X, Camera } from "lucide-react";

export default function Calendar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [showAddEvent, setShowAddEvent] = useState(false);

  const [eventName, setEventName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  function handleAddEvent() {
    setShowAddEvent(true);
  }

  function handleCloseForm() {
    setShowAddEvent(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      eventName,
      time,
      date,
      address,
      contactNumber,
    });

    alert("Event added successfully!");

    setShowAddEvent(false);

    setEventName("");
    setTime("");
    setDate("");
    setAddress("");
    setContactNumber("");
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Calender" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Calender" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Calender
          </h1>

          <div className="flex flex-col lg:flex-row gap-6">
            <EventsPanel onAddEvent={handleAddEvent} />

            <CalendarGrid />
          </div>
        </main>
      </div>

      {showAddEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          {/* Form Card */}
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl">
            <button
              onClick={handleCloseForm}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-500"
            >
              <X size={22} />
            </button>

            <div className="p-6 sm:p-10 lg:p-14">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
                Add New Event
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center mb-10">
                  <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                    <Camera size={28} className="text-gray-600" />
                  </div>

                  <button
                    type="button"
                    className="mt-4 text-blue-600 text-sm font-medium"
                  >
                    Upload Cover Photo
                  </button>
                </div>

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Event Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter event name"
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Time
                    </label>

                    <input
                      type="text"
                      placeholder="12:34 BDT"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Date
                    </label>

                    <input
                      type="text"
                      placeholder="11-09-2019"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Address
                    </label>

                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Contact Number
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your Contact Number"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3.5 text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    className="w-full sm:w-72 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-colors"
                  >
                    Add Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
