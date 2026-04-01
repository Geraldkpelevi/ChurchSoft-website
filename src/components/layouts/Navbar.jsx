import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Leadership", path: "/leadership" },
    {
      name: "News & Events",
      dropdown: [
        { name: "News", path: "/news" },
        { name: "Events", path: "/events" },
      ],
    },
    {
      name: "Ministries",
      dropdown: [
        { name: "Youth", path: "/ministries/youth" },
        { name: "Women", path: "/ministries/women" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ];

  const isDropdownActive = (link) => {
    if (!link.dropdown) return false;
    return link.dropdown.some((item) => item.path === location.pathname);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="GCCI Logo"
                className="h-12 w-auto lg:h-16 transition-transform duration-300 hover:scale-105"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 text-sm font-semibold transition-colors duration-300 ${
                        isDropdownActive(link)
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                              `block px-4 py-3 text-sm transition-colors duration-200 ${
                                isActive
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-semibold transition-colors duration-300 ${
                        isActive
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.name ? null : link.name,
                        )
                      }
                      className={`w-full flex items-center justify-between px-3 py-3 text-base font-medium transition-colors duration-200 ${
                        isDropdownActive(link)
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeDropdown === link.name && (
                      <div className="ml-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                              `block px-3 py-2 text-sm transition-colors duration-200 ${
                                isActive
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                              }`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-3 py-3 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
