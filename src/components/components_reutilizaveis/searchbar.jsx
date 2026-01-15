import { useState } from "react";

export default function SearchBar({ searchTerm, onSearchChange }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex items-center gap-3 bg-white border-2 rounded-xl p-3 w-full max-w-sm shadow-sm transition-all duration-200 ${
      isFocused 
        ? 'border-indigo-500 shadow-lg shadow-indigo-100' 
        : 'border-gray-200 hover:border-gray-300'
    }`}>
      <svg 
        className={`w-5 h-5 transition-colors duration-200 ${
          isFocused ? 'text-indigo-600' : 'text-gray-400'
        }`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
      </svg>
      
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 border-none outline-none bg-transparent text-gray-800 placeholder-gray-400 text-sm"
      />
      
      {searchTerm && (
        <button
          onClick={() => onSearchChange('')}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 hover:bg-gray-100 rounded-full"
          aria-label="Limpar busca"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}