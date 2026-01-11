export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2 w-full max-w-sm">
      <img
        src="https://cdn-icons-png.flaticon.com/512/64/64673.png"
        alt="search"
        className="w-6 h-6 object-contain"
      />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 border-none outline-none p-1 text-sm"
      />
    </div>
  );
}
