import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
      <Input
        type="text"
        placeholder="Search restaurants and dishes..."
        value={searchQuery}
        onChange={handleSearch}
        className="pl-10"
      />
    </div>
  );
}