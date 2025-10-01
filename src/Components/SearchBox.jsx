// src/components/SearchBox.jsx
import { useState } from 'react';

const SearchBox = ({ onSearch, setCurrentPage }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to the first page on new search
    onSearch(input.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 mt-[20px] mb-10"
    >
      <div className="flex items-center overflow-hidden transition duration-300 bg-white border border-gray-300 rounded-full shadow-md dark:bg-gray-800 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500">
        <div className="pl-5 text-xl text-gray-400 dark:text-gray-500">
          🔍
        </div>

        <input
          type="text"
          placeholder="Search movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-5 py-3 transition-all duration-200 placeholder:text-neutral-400 rounded-2xl text-neutral-800"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 m-1 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
