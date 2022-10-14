import FilterByCard from "../cards/FilterByCard";
import SortByCard from "../cards/SortByCard";
const LeftSidebar = () => {
  return (
    <div className="hidden lg:block md:w-1/5 2xl:w-1/6 space-y-20 h-screen">
      <SortByCard />
      <FilterByCard filterType="brand" />
      <FilterByCard filterType="model" />
    </div>
  );
};

export default LeftSidebar;
