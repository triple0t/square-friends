import SearchIcon from "@common/icons/SearchIcon";
import FilterIcon from "@common/icons/FilterIcon";
import SortByIcon from "@common/icons/SortByIcon";

const FriendListActionComponents = () => {
  return (
    <div className="flex">
      <button className="p-1 rounded-full">
        <span className="sr-only">Search</span>
        {SearchIcon}
      </button>
      <button className="p-1 rounded-full">
        <span className="sr-only">Sort</span>
        {SortByIcon}
      </button>
      <button className="p-1 rounded-full">
        <span className="sr-only">Filter</span>
        {FilterIcon}
      </button>
    </div>
  );
};

export default FriendListActionComponents;
