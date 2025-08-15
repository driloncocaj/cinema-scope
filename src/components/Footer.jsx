import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Cinema Scope 🎬. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/driloncocaj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
