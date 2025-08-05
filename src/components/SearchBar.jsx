import React, { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const [inputValue, setInputValue] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md shadow-lg">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search for a movie..."
        className="flex-1 p-3 rounded-l-lg bg-transparent text-white placeholder-gray-300 border border-gray-600 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-5 rounded-r-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
