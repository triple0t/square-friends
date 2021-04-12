import SearchIcon from '@library/common/icons/SearchIcon';

const Search = () => {
  return (
    <div className="mt-1 relative rounded-md shadow-sm">
      <input
        type="text"
        name="search"
        id="search"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full  pr-12 sm:text-sm border-gray-300 rounded-md"
        placeholder="Search"
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0  border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
          <span className="sr-only">Search</span>
          {SearchIcon}
        </button>
      </div>
    </div>
  );
};

export default Search;
