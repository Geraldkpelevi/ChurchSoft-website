import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
// import { ChevronDown } from 'lucide-react';


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
      name: "News & Updates",
      dropdown: [
        { name: "News", path: "/events/upcoming" },
        { name: "Updates", path: "/events/past" },
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
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-blue-600 ml-6">
          <img src="/images/logo.png" alt="Logo" className="h-20 20" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium mr-15">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <div className="flex flex-col">
                
                {link.dropdown ? (
                  <>
                    <span
                      className={`cursor-pointer ${
                        isDropdownActive(link)
                          ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                          : "text-gray-700 hover:text-blue-600 transition"
                      }`}
                    >
                      {link.name}
                    </span>
                    
                    {activeDropdown === link.name && (
                      <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md w-48">
                        {link.dropdown.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                              isActive
                                ? "block px-4 py-2 text-blue-600"
                                : "block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                    <div>
                      {/* <ChevronDown /> */}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                        : "text-gray-700 hover:text-blue-600 transition"
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden font-medium bg-white px-4 pb-4"
        >
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
                    className={`w-full text-left py-2 font-medium ${
                      isDropdownActive(link)
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </button>

                  {activeDropdown === link.name &&
                    link.dropdown.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "block pl-4 py-2 text-blue-600 "
                            : "block pl-4 py-2 text-gray-700 hover:text-blue-600"
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 text-blue-600 "
                      : "block py-2 text-gray-700 hover:text-blue-600"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
