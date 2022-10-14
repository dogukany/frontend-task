import { useNavigate, useParams } from "react-router-dom";

interface SearchBarProps {
  onSearch: (e: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { param } = useParams();
  const navigate = useNavigate();

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        className="w-full bg-white  border border-slate-300 rounded-md py-2 pl-10 pr-4 focus:outline-none"
        placeholder="Search..."
        type="search"
        id="search"
        onChange={(e) => onSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && param !== "/") {
            navigate("/");
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
