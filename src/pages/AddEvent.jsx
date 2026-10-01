import { useState } from "react";
import { Camera } from "lucide-react";

export default function AddEvent() {
  const [eventName, setEventName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [image, setImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const eventData = {
      eventName,
      time,
      date,
      address,
      contactNumber,
    };

    console.log("Event Data:", eventData);

    alert("Event added successfully!");
  }

  return (
    <div className="min-h-screen bg-[#f5f6fa] p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-10">
        Add New Event
      </h1>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 lg:p-14">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-12">
            <input
              type="file"
              id="coverPhoto"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            <label
              htmlFor="coverPhoto"
              className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {image ? (
                <img
                  src={image}
                  alt="Cover"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Camera size={28} className="text-gray-600" />
              )}
            </label>

            <label
              htmlFor="coverPhoto"
              className="mt-4 text-blue-600 text-sm font-medium cursor-pointer hover:underline"
            >
              Upload Cover Photo
            </label>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
            <div>
              <label className="block text-sm text-gray-600 mb-3">
                Event Name
              </label>

              <input
                type="text"
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-3">Time</label>

              <input
                type="text"
                placeholder="12:34 BDT"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-3">Date</label>

              <input
                type="text"
                placeholder="11-09-2019"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-3">
                Address
              </label>

              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-3">
                Contact Number
              </label>

              <input
                type="text"
                placeholder="Enter your Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center mt-16">
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
  );
}
