import { useState, useEffect } from "react";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("relative");

  const stickNavbar = () => {
    if (typeof window !== "undefined") {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setStickyClass("fixed top-0 left-0 z-50 w-full")
        : setStickyClass("relative");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <div className={`w-full h-16 bg-secondary font ${stickyClass}`}>
      <nav className="relative">
        <ul className="flex justify-evenly items-center p-5 bg-gray-800 text-white font-firstFont">
          <li className="px-4">
            <a href="/" className="text-white">
              Home
            </a>
          </li>
          <li className="px-4">
            <a href="/about" className="text-white">
              About
            </a>
          </li>
          <li className=" relative flex justify-center">
            <div className="absolute top-1/2 transform -translate-y-1/2 w-40 h-40 rounded-full mx-auto bg-secondary"></div>
          </li>
          <li className="px-4">
            <a href="/menu" className="text-white">
              Menu
            </a>
          </li>
          <li className="px-4">
            <a href="/contact" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
