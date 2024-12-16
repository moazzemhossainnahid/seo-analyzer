import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-base-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">SEO Analyzer</span>
          </div>

          {/* Menu Toggle (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-primary hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 md:top-0 left-0 w-full bg-base-200 shadow-md md:relative md:flex md:items-center md:justify-end md:w-auto md:shadow-none md:bg-transparent`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 mt-2 md:mt-0 px-4 md:px-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold block py-2 md:py-0"
                      : "hover:text-primary block py-2 md:py-0"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold block py-2 md:py-0"
                      : "hover:text-primary block py-2 md:py-0"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary font-semibold block py-2 md:py-0"
                      : "hover:text-primary block py-2 md:py-0"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
