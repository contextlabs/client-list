import { ReactComponent as Search } from '../../img/search.svg';

export interface SearchInputProps {
  setSearchTerm: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setSearchTerm }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex border-2 rounded w-full">
        <input
          type="text"
          className="px-4 py-2 w-full"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="SearchInput"
        />
        <button className="flex items-center justify-center px-4 border-l bg-white" aria-label="SearchInputIcon">
          <Search className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};
