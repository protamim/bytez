import { IoOptionsOutline } from "react-icons/io5";
import FilterPanel from "./FilterPanel";
import { useState } from "react";

const FilterButton = () => {
    const [isOpen, setIsOpen ]= useState(false);
  return (
    <>
      <div onClick={()=> setIsOpen(!isOpen)} className="flex items-center space-x-6 justify-between border border-slate-200 rounded-lg px-4 py-3 w-36">
        <h4 className="text-xs font-medium text-black">Filters</h4>
        <span className="text-lg">
          <IoOptionsOutline />
        </span>
      </div>
      {/* Filter panel show when clicked this button */}
      <FilterPanel isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default FilterButton;
