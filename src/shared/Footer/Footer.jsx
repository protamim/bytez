import { Link } from "react-router-dom";
import { bytezLogo } from "@/assets/images/main";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="text-slate-400">
        <div className="container py-10 bg-black md:grid md:justify-between md:grid-cols-3 md:space-x-9 lg:py-20">
          <div>
            {/* Footer logo */}
            <Link className="flex items-center justify-center space-x-3 mb-8">
              <img className="bg-white w-8" src={bytezLogo} alt="bytez" />
              <span className="text-xl font-medium text-white">Bytez</span>
            </Link>
            {/* Footer Slugan */}
            <p className="max-w-xs mx-auto text-center text-sm mb-5">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          {/* Footer Links */}
          <div className="text-center mb-8 md:col-span-2 lg:col-auto">
            <h5 className="text-xl font-medium text-white mb-4">Services</h5>
            <ul className="flex flex-col items-center justify-center space-y-2 text-sm">
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Bonus Program</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Gift Card</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Credit and Payment</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Service Contracts</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Non-cash Account</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Payment</Link>
              </li>
            </ul>
          </div>
          {/* Assistance to the buyer */}
          <div className="text-center mb-8 md:order-4 md:col-span-2 lg:col-auto lg:order-3">
            <h5 className="text-xl font-medium text-white mb-4">
              Assistance to the buyer
            </h5>
            <ul className="flex flex-col items-center justify-center space-y-2 text-sm">
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Find an order</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Terms of delivery</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Exchange and return of good</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Gurantee</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Frequenly asked questions</Link>
              </li>
              <li className="max-w-max transition-colors ease-in-out duration-500 hover:text-white">
                <Link>Terms of use of the site</Link>
              </li>
            </ul>
          </div>
          {/* Footer Social Links */}
          <div className="flex items-center justify-center space-x-6 text-2xl text-white md:self-end lg:order-4">
            <Link className="transition-opacity ease-in-out duration-500 hover:opacity-35">
              <FaFacebookF />
            </Link>
            <Link className="transition-opacity ease-in-out duration-500 hover:opacity-35">
              <FaTwitter />
            </Link>
            <Link className="transition-opacity ease-in-out duration-500 hover:opacity-35">
              <FaInstagram />
            </Link>
            <Link className="transition-opacity ease-in-out duration-500 hover:opacity-35">
              <FaTiktok />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
