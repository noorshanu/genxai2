
// components/ui/SearchBar.tsx
import { FC } from 'react';

const SearchBar: FC = () => {
  return (
    <div className="relative">
      <input
        type="search"
        placeholder="Search"
        className="w-64 px-4 py-2 bg-gray-800 rounded-full text-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;