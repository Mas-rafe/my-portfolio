import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-green-50">
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Left: Brand */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gray-900">
            Masrafe
          </a>
        </div>

        {/* Right: CTA */}
        <div>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 bg-emerald-400 text-white rounded-md shadow-sm hover:bg-emerald-500 transition"
          >
            Contact Now
          </a>
        </div>
      </nav>
    </header>
  );
}
