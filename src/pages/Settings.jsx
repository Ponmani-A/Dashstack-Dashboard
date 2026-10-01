import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Camera } from "lucide-react";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [siteName, setSiteName] = useState("Bright Web");
  const [copyRight, setCopyRight] = useState("All rights Reserved@brightweb");
  const [seoTitle, setSeoTitle] = useState("Bright web is a hybrid dashboard");
  const [seoDescription, setSeoDescription] = useState(
    "Bright web is a hybrid dashboard",
  );
  const [seoKeywords, setSeoKeywords] = useState("CEO");

  const [logo, setLogo] = useState(null);

  function handleLogoChange(e) {
    const file = e.target.files[0];

    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  }

  function handleSave(e) {
    e.preventDefault();

    console.log({
      siteName,
      copyRight,
      seoTitle,
      seoDescription,
      seoKeywords,
    });

    alert("Settings saved successfully!");
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <div className="hidden lg:block">
        <Sidebar activePage="Settings" />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full">
            <Sidebar activePage="Settings" />
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0">
        <Navbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        <main className="p-4 sm:p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-10">
            General Settings
          </h1>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 lg:p-14">
            <form onSubmit={handleSave}>
              <div className="flex flex-col items-center mb-12">
                <input
                  type="file"
                  id="logo"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />

                <label
                  htmlFor="logo"
                  className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Camera size={28} className="text-gray-600" />
                  )}
                </label>

                <label
                  htmlFor="logo"
                  className="mt-4 text-blue-600 text-sm font-medium cursor-pointer hover:underline"
                >
                  Upload Logo
                </label>
              </div>

              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
                <div>
                  <label className="block text-sm text-gray-600 mb-3">
                    Site Name
                  </label>

                  <input
                    type="text"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    className="w-full h-[52px] bg-gray-50 border border-gray-200 rounded-md px-4 text-sm text-gray-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-3">
                    Copy Right
                  </label>

                  <input
                    type="text"
                    value={copyRight}
                    onChange={(e) => setCopyRight(e.target.value)}
                    className="w-full h-[52px] bg-gray-50 border border-gray-200 rounded-md px-4 text-sm text-gray-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-3">
                    SEO Title
                  </label>

                  <input
                    type="text"
                    value={seoTitle}
                    onChange={(e) => setSeoTitle(e.target.value)}
                    className="w-full h-[52px] bg-gray-50 border border-gray-200 rounded-md px-4 text-sm text-gray-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div className="row-span-2">
                  <label className="block text-sm text-gray-600 mb-3">
                    SEO Description
                  </label>

                  <textarea
                    value={seoDescription}
                    onChange={(e) => setSeoDescription(e.target.value)}
                    className="w-full h-[186px] resize-none bg-gray-50 border border-gray-200 rounded-md px-4 py-4 text-sm text-gray-700 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-3">
                    SEO Keywords
                  </label>

                  <input
                    type="text"
                    value={seoKeywords}
                    onChange={(e) => setSeoKeywords(e.target.value)}
                    className="w-full h-[52px] bg-gray-50 border border-gray-200 rounded-md px-4 text-sm text-gray-700 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-14">
                <button
                  type="submit"
                  className="w-full sm:w-72 h-[55px] bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
