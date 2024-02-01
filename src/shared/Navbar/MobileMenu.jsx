import { IoMdHeartEmpty } from "react-icons/io";
import NavLinks from "./NavLinks";
import { FaCartPlus, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className=" relative bg-white sm:hidden">
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <span className="text-lg">
              <Link to={"/"}>Bytez</Link>
            </span>
            {/* Option Menu Icon */}
            <button
              onClick={() => setToggle(!toggle)}
              className="text-xl text-gray-600 cursor-pointer transition-colors ease-in-out duration-300 hover:text-black"
            >
              {toggle ? <RxCross1 /> : <FiMenu />}
            </button>
          </div>
        </div>
        {/* Hidden Menu */}
        <div
          className={`${
            toggle ? "bounce-top-to-bottom block" : "hidden"
          } bg-gray-100 px-5 py-3`}
        >
          {/* Nav Search bar */}
          <form className="relative mb-5">
            <input
              className="bg-gray-200 pl-8 h-8 text-sm w-full focus:outline-none rounded-md"
              type="search"
              placeholder="search"
            />
            <span className="absolute top-1/2 left-2 -translate-y-1/2">
              <IoIosSearch />
            </span>
          </form>
          {/* Navigation menu */}
          <ul className="mb-5 flex justify-start flex-col gap-4">
            <NavLinks />
          </ul>
          {/* Navbar Menu Icons */}
          <div className="mb-4 flex gap-6">
            <span className="text-xl cursor-pointer">
              <IoMdHeartEmpty className="fill-rose-700 transition-colors duration-300 ea hover:fill-black" />
            </span>
            <span className="text-xl cursor-pointer">
              <FaCartPlus className="fill-green-500 transition-colors duration-300 ea hover:fill-black" />
            </span>
            <span className="text-xl cursor-pointer">
              <FaRegUser className="fill-purple-600 transition-colors duration-300 ea hover:fill-black" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
