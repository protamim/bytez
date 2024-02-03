import { FaMobileScreenButton } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FaHeadphonesAlt } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";
import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <>
      <div className="hidden lg:block">
        <div className="container bg-slate-800  mx-auto px-5">
          <div>
            <ul className="flex gap-6 items-center h-11 text-gray-300 divide-x">
              <li className="text-gray-300 transition-colors ease-in-out hover:text-white pl-0">
                <Link className="flex items-center gap-3">
                  <FaMobileScreenButton className="text-2xl" />
                  <span>Phones</span>
                </Link>
              </li>
              <li className="text-gray-300 transition-colors ease-in-out hover:text-white pl-5">
                <Link className="flex items-center gap-3">
                  <HiOutlineDesktopComputer className="text-2xl" />
                  <span>Computers</span>
                </Link>
              </li>
              <li className="text-gray-300 transition-colors ease-in-out hover:text-white pl-5">
                <Link className="flex items-center gap-3">
                  <BsSmartwatch className="text-2xl" />
                  <span>Smart Watches</span>
                </Link>
              </li>
              <li className="text-gray-300 transition-colors ease-in-out hover:text-white pl-5">
                <Link className="flex items-center gap-3">
                  <IoCameraOutline className="text-2xl" />
                  <span>Cameras</span>
                </Link>
              </li>
              <li className="text-gray-300 transition-colors ease-in-out hover:text-white pl-5">
                <Link className="flex items-center gap-3">
                  <FaHeadphonesAlt className="text-2xl" />
                  <span>Headphones</span>
                </Link>
              </li>
              <li className="text-gray-300 transition-colors ease-in-out hover:text-white pl-5">
                <Link className="flex items-center gap-3">
                  <SiYoutubegaming className="text-2xl" />
                  <span>Gaming</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;
