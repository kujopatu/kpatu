import React from "react";

export default function App() {
  const whatsappNumber = "2348034445666";
  const calendlyLink = "https://calendly.com/sincereemmy";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 font-sans p-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Kujo</h1>
        <p className="text-lg text-gray-700">Software Engineer & Logistics Expert</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <div className="flex gap-4">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>
          <a
            href={calendlyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Book on Calendly
          </a>
        </div>
      </section>
    </div>
  );
}