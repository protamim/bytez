import { IoIosArrowDown } from "react-icons/io";
const RatingFilterButton = () => {
  return (
    <>
      <div className="flex items-center space-x-6 justify-between border border-slate-200 rounded-lg px-4 py-3 w-36">
        <h4 className="text-xs font-medium text-black">Rating by</h4>
        <span className="text-xl">
          <IoIosArrowDown />
        </span>
      </div>
    </>
  );
};

export default RatingFilterButton;
