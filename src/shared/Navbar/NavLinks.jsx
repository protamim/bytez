import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <li className="text-gray-700 hover:text-black transition-colors ease-in-out ">
        <Link>Home</Link>
      </li>
      <li className="text-gray-700 hover:text-black transition-colors ease-in-out ">
        <Link>About</Link>
      </li>
      <li className="text-gray-700 hover:text-black transition-colors ease-in-out ">
        <Link>Contact Us</Link>
      </li>
      <li className="text-gray-700 hover:text-black transition-colors ease-in-out ">
        <Link>Blog</Link>
      </li>
    </>
  );
};

export default NavLinks;
