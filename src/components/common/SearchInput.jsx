/* eslint-disable react/prop-types */


const SearchInput = ({icon}) => {
    return (
        <>
           <div className="relative md:col-span-5">
              <input
                className="bg-gray-200 pl-8 h-8 text-sm w-full focus:outline-none rounded-md"
                type="search"
                placeholder="search"
              />
              <span className="absolute top-1/2 left-2 -translate-y-1/2">
                {icon}
              </span>
            </div> 
        </>
    );
};

export default SearchInput;