import FilterIcon from '@common/icons/FilterIcon';
import SortByIcon from '@common/icons/SortByIcon';
import Search from './search-component';

const FriendListActionComponents = () => {
  return (
    <div className="flex">
      <Search />
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
