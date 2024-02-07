import { Link } from "react-router-dom";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import SearchInput from "@/components/common/SearchInput";

const Navbar = () => {
  return (
    <>
      <nav className="hidden sm:block">
        <div className="container mx-auto px-5 bg-slate-100">
          <div className="relative h-16 flex items-center justify-between md:flex-none md:grid md:justify-between md:grid-cols-12 md:gap-5">
            {/* Logo */}
            <span className="text-lg sm:text-xl md:col-span-1 lg:text-2xl">
              <Link to={"/"}>Bytez</Link>
            </span>
            {/* Nav Search bar */}
            <SearchInput icon={<IoIosSearch />} />
            {/* Navigation menu */}
            <ul className="flex justify-start gap-4 sm:[&>li]:text-sm md:col-span-4 md:justify-center lg:sm:[&>li]:text-base lg:gap-7">
              <NavLinks />
            </ul>
            {/* Navbar Menu Icons */}
            <div className="flex gap-3 items-center md:col-span-2 md:justify-end">
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
      </nav>
      {/* Navbar for mobile only */}
      <MobileMenu />
    </>
  );
};

export default Navbar;
