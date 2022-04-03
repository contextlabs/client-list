import { ReactComponent as Search } from '../../img/search.svg';

export interface SearchInputProps {
  setSearchTerm: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setSearchTerm }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full rounded border-2">
        <input
          type="text"
          className="py-2 px-4 w-full"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="SearchInput"
        />
        <button
          className="flex justify-center items-center px-4 bg-white border-l"
          aria-label="SearchInputIcon"
        >
          <Search className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};
