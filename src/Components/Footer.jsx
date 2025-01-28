import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{backgroundColor:"#b01c1a"}} className="text-white py-10 px-5">
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        {/* Column 1: Logo and Ownership */}
        <div className="flex-1 min-w-[200px]">
          <h1 className="text-2xl font-bold mb-2">YourLogo</h1>
          <p className="text-gray-400">Owned by Your Company Name</p>
        </div>
       
        {/* Column 2: Know More */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-xl font-semibold mb-2">Know More</h2>
          <ul className="text-gray-400 space-y-1">
            <li>
              <a href="/about"  className="text-white hover:text-black no-underline ">About Us</a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-white hover:text-black no-underline">Privacy Policy</a>
            </li>
            <li>
              <Link to="/contact-us" className="text-white hover:text-black no-underline">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Help */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-xl font-semibold ml-5 mb-2">Help</h2>
          <ul className="text-gray-400 space-y-1">
            <li>
              <a href="/faq" className="text-white hover:text-black no-underline">FAQ</a>
            </li>
            <li>
              <a href="/support" className="text-white hover:text-black no-underline">Support</a>
            </li>
            <li>
              <a href="/terms" className="text-white hover:text-black no-underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Join Us */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-xl font-semibold mb-2">Join Us</h2>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg bg-white text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full hover:text-black  text-white "
            >
              Subscribe 
            </button>
          </form>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-white text-white" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-white text-white" />
            </a>
            <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-2xl hover:text-white text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
