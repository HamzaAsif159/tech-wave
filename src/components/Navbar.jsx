import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-18"></div>
      <nav
        className={`bg-white fixed w-full top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-9xl mx-auto px-4 md:py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center">
                {/* Grid icon SVG */}
                <span className="text-xl font-bold text-gray-800">
                  Techwave
                </span>
              </NavLink>
            </div>

            {/* Hamburger Menu for Mobile/Tablet */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Navigation Links and Search Bar */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink
                to="/store"
                className="text-base transition-all duration-200 ease-in-out text-gray-500 hover:bg-[#F2F2F2] hover:text-black px-2 py-1 rounded hover:px-4"
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                className="text-base transition-all duration-200 ease-in-out text-gray-500 hover:bg-[#F2F2F2] hover:text-black px-2 py-1 rounded hover:px-4"
              >
                About
              </NavLink>
              <NavLink
                to="/support"
                className="text-base transition-all duration-200 ease-in-out text-gray-500 hover:bg-[#F2F2F2] hover:text-black px-2 py-1 rounded hover:px-4"
              >
                Support
              </NavLink>
              <NavLink
                to="/contact"
                className="text-base transition-all duration-200 ease-in-out text-gray-500 hover:bg-[#F2F2F2] hover:text-black px-2 py-1 rounded hover:px-4"
              >
                Contact
              </NavLink>
              {/* Search Bar */}
              <div
                className={`flex items-center border border-gray-300 rounded-full px-3 py-1 transition-all duration-200 ease-in-out ${
                  isSearchHovered ? "w-40" : "w-32"
                }`}
                onMouseEnter={() => setIsSearchHovered(true)}
                onMouseLeave={() => setIsSearchHovered(false)}
              >
                <input
                  type="text"
                  placeholder={
                    isSearchHovered ? "Search for keywords" : "Search"
                  }
                  className="border-none outline-none text-sm text-gray-500 w-full"
                />
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Navigation Links */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4">
              <NavLink
                to="/store"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-all duration-200 ease-in-out ${
                    isActive ? "text-black" : "text-gray-500"
                  } hover:bg-[#9C9C9E] hover:text-white px-2 py-1 rounded hover:px-4`
                }
              >
                Store
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-all duration-200 ease-in-out ${
                    isActive ? "text-black" : "text-gray-500"
                  } hover:bg-[#9C9C9E] hover:text-white px-2 py-1 rounded hover:px-4`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/support"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-all duration-200 ease-in-out ${
                    isActive ? "text-black" : "text-gray-500"
                  } hover:bg-[#9C9C9E] hover:text-white px-2 py-1 rounded hover:px-4`
                }
              >
                Support
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-base transition-all duration-200 ease-in-out ${
                    isActive ? "text-black" : "text-gray-500"
                  } hover:bg-[#9C9C9E] hover:text-white px-2 py-1 rounded hover:px-4`
                }
              >
                Contact
              </NavLink>
              {/* Search Bar for Mobile */}
              <div
                className={`flex items-center border border-gray-300 rounded-full px-3 py-1 mx-3 transition-all duration-200 ease-in-out ${
                  isSearchHovered ? "w-52" : "w-40"
                }`}
                onMouseEnter={() => setIsSearchHovered(true)}
                onMouseLeave={() => setIsSearchHovered(false)}
              >
                <input
                  type="text"
                  placeholder={
                    isSearchHovered ? "Search for keywords" : "Search"
                  }
                  className="border-none outline-none text-sm text-gray-500 w-full"
                />
                <svg
                  className="h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
